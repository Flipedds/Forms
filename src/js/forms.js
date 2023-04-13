const input = document.getElementById("telefone");

        input.addEventListener("keyup", formatarTelefone);

        function formatarTelefone(e) {

            var v = e.target.value.replace(/\D/g, "");

            v = v.replace(/^(\d\d)(\d)/g, "($1)$2");

            v = v.replace(/(\d{5})(\d)/, "$1-$2");

            e.target.value = v;
        }

(function() {
            const form = document.querySelector('#formulario');
            const checkboxes = form.querySelectorAll('input[type=checkbox]');
            const checkboxLength = checkboxes.length;
            const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;
        
            function init() {
                if (firstCheckbox) {
                    for (let i = 0; i < checkboxLength; i++) {
                        checkboxes[i].addEventListener('change', checkValidity);
                    }
        
                    checkValidity();
                }
            }
        
            function isChecked() {
                for (let i = 0; i < checkboxLength; i++) {
                    if (checkboxes[i].checked) return true;
                }
        
                return false;
            }
        
            function checkValidity() {
                const errorMessage = !isChecked() ? 'Ao menos uma opção deve está selecionada' : '';
                firstCheckbox.setCustomValidity(errorMessage);
            }
        
            init();
        })();