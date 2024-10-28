

<?php
if ($_POST) {
// Get the number from the form
        $num = ($_POST['size']);

        echo "<table border=1>";

// Print the header row
        echo "<tr><th> </th>";
        for ($i = 1; $i <= $num; $i++) {
                echo "<th>$i</th>";
        }
        echo "</tr>";

// Print the table rows
        for ($i = 1; $i <= $num; $i++) {
                echo "<tr>";
                echo "<th>$i</th>";

                for ($j = 1; $j <= $num; $j++) {
                        echo "<td>" . ($i * $j) . "</td>";
                }
                echo "</tr>";
        }

        echo "</table>";
}
?>

                                                                             

