function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let hight = height / 100;
  let bmi = weight / (higth * hight);

  console.log("your mbi is:" + bmi.toFixed(2));

  if (bmi < 18.5) {
    bmistatus = "underwiegth";
  } else if (bmi <= 18.5 && bmi < 25.0) {
    bmistatus = "healthyweigth";
  } else if (bmi <= 25.0 && bmi < 30) {
    bmistatus = "overweight";
  } else if (bmi > 30) {
    bmistatus = "obesity";
  }
  console.log(bmistatus);
}

}
