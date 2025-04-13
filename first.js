
    function resetForm(formId) {
        document.getElementById(formId).reset();
    }


    function validateRefForm() {
        const inputs = document.querySelectorAll('#box input');
        for (let input of inputs) {
            if (input.value.trim() === "") {
                alert("Please fill all fields of the Reference Number.");
                return false;
            }
        }
        alert("Form submitted successfully!");
        return true;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const inputs = document.querySelectorAll('#box input');
        inputs.forEach((input, index) => {
            input.maxLength = 4;
            input.addEventListener("input", () => {
                if (input.value.length === input.maxLength && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });
    });


    function toggleSuggestion() {
        const para = document.getElementById("paragr");
        para.style.display = (para.style.display === "none") ? "block" : "none";
    }


    <form id="refForm" onsubmit="return validateRefForm()" action="action.php">
    ...
    <button type="submit">Customer Menu</button>
    <button type="button" onclick="resetForm('refForm')">Reset</button>
</form>



