const int sensorPin   = A0;
const int ledPinRed   = 2;
const int ledPinGreen = 3;


const int secoRaw    = 1023;  
const int humedoRaw  = 294;   

const int umbralSeco = 30;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRed,   OUTPUT);
  pinMode(ledPinGreen, OUTPUT);
}

void loop() {
  
  int lectura = analogRead(sensorPin);
  int porcentaje = map(lectura, secoRaw, humedoRaw, 0, 100);
  porcentaje = constrain(porcentaje, 0, 100);

  Serial.print("Cruda: ");
  Serial.print(lectura);
  Serial.print(" --> ");
  Serial.print(porcentaje);
  Serial.println("%");

  if (porcentaje < umbralSeco) {
    
    digitalWrite(ledPinGreen, LOW);
    digitalWrite(ledPinRed,   HIGH);
  } else {
    
    digitalWrite(ledPinGreen, HIGH);
    digitalWrite(ledPinRed,   LOW);
  }

  delay(5000);
}
