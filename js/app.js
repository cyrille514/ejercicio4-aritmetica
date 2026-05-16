
        function calcularPintura() {
            // 1. Definir la constante de cobertura (m2 por litro)

            const COBERTURA = 12;

            // 2. Obtener los valores del formulario

            const alto = parseFloat(document.getElementById('alto').value);
            const ancho = parseFloat(document.getElementById('ancho').value);
            const manos = parseInt(document.getElementById('manos').value);

            // 3. Calcular área y litros

            const areaPared = alto * ancho;
            const litrosNecesarios = (areaPared * manos) / COBERTURA;
            
            // 4. Mostrar resultado redondeado a 2 decimales

             document.getElementById('resultado').innerHTML = 
                `Necesitarás: ${litrosNecesarios} litros de pintura.`;
            
        }
    
