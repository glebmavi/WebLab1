<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $start_time = microtime(true);

    if (isset($_POST["X"]) && isset($_POST["Y"]) && isset($_POST["R"])) {
        if (preg_match('/[^0-9-.]/', $_POST["X"].$_POST["Y"].$_POST["R"])) {
            http_response_code(400);
            die("Invalid input. All three variables must be integers.");
        }

        $X[] = intval($_POST["X"]);
        $Y = floatval($_POST["Y"]);
        $R = intval($_POST["R"]);

        foreach ($X as $xValue) {
            $xValue = intval($xValue);
            $Y = floatval($_POST["Y"]);
            $R = intval($_POST["R"]);
            if (!variablesValidation($xValue, $Y, $R)) {
                http_response_code(400);
                die("Invalid input. Values are out of range.");
            }

            $rectangleCheck = ($xValue >= -$R and $xValue <= 0 and $Y >= 0 and $Y <= $R/2);
            $arcCheck = (($xValue**2 + $Y**2 <= $R**2) and $xValue <= 0 and $Y <= 0);
            $triangleCheck = ($Y >= $xValue - $R and $xValue >= 0 and $Y <= 0);

            if ($rectangleCheck or $arcCheck or $triangleCheck) {
                $hit = "Попал";
            }
            else {
                $hit = "Не попал";
            }

            $response = array(
                'X' => $xValue,
                'Y' => $Y,
                'R' => $R,
                'hit' => $hit,
                'currentTime' => date("Y-m-d H:i:s"),
                'executionTime' => (microtime(true) - $start_time) * 1000 . " ms"
            );

            echo json_encode($response);
        }

    } else {
        http_response_code(400);
        die("Missing variables. Please, try again.");
    }
} else {
    http_response_code(405);
    die("This script only accepts POST requests.");
}

function variablesValidation($X, $Y, $R): bool {
    if ((is_int($X) && $X >= -3 && $X <= 5) and (is_float($Y) && $Y >= -5 && $Y <= 3) and (is_int($R) && $R >= 1 && $R <= 5)) {
        return true;
    } else {
        return false;
    }
}
?>