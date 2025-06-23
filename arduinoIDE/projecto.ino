const int sensorPin = A0;
const int ledPinRed = 2;
const int ledPinGreen = 3;

int humedad = 0;

void setup() {
  pinMode(ledPinRed, OUTPUT);
  pinMode(ledPinGreen, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  humedad = analogRead(sensorPin);
  Serial.print("Humedad: ");
  Serial.println(humedad);

  if (humedad < 500) {

    digitalWrite(ledPinGreen, LOW);
    digitalWrite(ledPinRed, HIGH);
  } else {
    digitalWrite(ledPinGreen, HIGH);
    digitalWrite(ledPinRed, LOW);
  }

  delay(5000);
}
