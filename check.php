<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $start_time = microtime(true);

    if (isset($_POST["X"]) && isset($_POST["Y"]) && isset($_POST["R"])) {

        $X = $_POST["X"];
        $Y = $_POST["Y"];
        $R = $_POST["R"];

        if (!is_numeric($X) || !is_numeric($Y) || !is_numeric($R)) {
            http_response_code(400);
            die("Invalid input. X, Y, or R is not a numeric value.");
        }

        $X = intval($X);
        $Y = floatval($Y);
        $R = intval($R);

        if (strlen($_POST["Y"]) > 17 or strlen($_POST["R"]) > 17 or strlen($_POST["X"]) > 17) {
            http_response_code(400);
            die("Invalid input. Cannot handle such precision.");
        }

        if (!variablesValidation($X, $Y, $R)) {
            http_response_code(400);
            die("Invalid input. Values are out of range.");
        }

        $rectangleCheck = ($X >= -$R and $X <= 0 and $Y >= 0 and $Y <= $R/2);
        $arcCheck = (($X**2 + $Y**2 <= $R**2) and $X <= 0 and $Y <= 0);
        $triangleCheck = ($Y >= $X - $R and $X >= 0 and $Y <= 0);

        if ($rectangleCheck or $arcCheck or $triangleCheck) {
            $hit = "Попал";
        }
        else {
            $hit = "Не попал";
        }

        $response = array(
            'X' => $X,
            'Y' => $Y,
            'R' => $R,
            'hit' => $hit,
            'currentTime' => date("Y-m-d H:i:s"),
            'executionTime' => (microtime(true) - $start_time)
        );

        echo json_encode($response);

    } else {
        http_response_code(400);
        die("Missing variables. Please, try again.");
    }
} else {
    http_response_code(405);
    die("This script only accepts POST requests.");
}

function variablesValidation($X, $Y, $R): bool {
    if (($X >= -3 && $X <= 5) and ($Y >= -5 && $Y <= 3) and ($R >= 1 && $R <= 5)) {
        return true;
    } else {
        return false;
    }
}
?>