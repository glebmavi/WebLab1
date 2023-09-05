<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $start_time = microtime(true);
    $response = "";

    if (isset($_POST["X"]) && isset($_POST["Y"]) && isset($_POST["R"])) {
        $X = intval($_POST["X"]);
        $Y = intval($_POST["Y"]);
        $R = intval($_POST["R"]);

        $rectangleCheck = ($X >= -$R and $X <= 0 and $Y >= 0 and $Y <= $R/2);
        $arcCheck = (($X**2 + $Y**2 <= $R**2) and $X <= 0 and $Y <= 0);
        $triangleCheck = ($Y >= $X - $R and $X > 0 and $Y < 0);

        if ($rectangleCheck and $arcCheck and $triangleCheck) {
            $hit = "Попал";
        }
        else {
            $hit = "Не попал";
        }

        $response .= $X;
        $response .= ";";
        $response .= $Y;
        $response .= ";";
        $response .= $R;
        $response .= ";";
        $response .= $hit;
        $response .= ";";
        $response .= date("Y-m-d H:i:s");
        $response .= ";";
        $response .= (microtime(true) - $start_time) * 1000;
        $response .= " ms";
        $response .= "/";
        echo $response;

    } else {
        echo "All three integer variables are required.";
    }
} else {
    echo "This script only accepts POST requests.";
}

