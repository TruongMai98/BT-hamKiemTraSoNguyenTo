let number = parseInt(prompt("nhap so can kiem tra"));
isPrime(number)
function isPrime(number) {
    let count = 0;
    let isPrime = false;

    if (number == 0 || number == 1) {
        alert(number + " khong phai la so nguyen to");
    } else {
        for (let i = 2; i <= number; i++) {
            if (number % i == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            isPrime = true;
        }
        if (isPrime) {
            alert(number + " la so nguyen to");
        } else {
            alert(number + " khong la so nguyen to");
        }
    }
}