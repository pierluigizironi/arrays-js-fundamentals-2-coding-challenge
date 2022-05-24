/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/


const calcTip = function(bill) {
    if (bill >= 300 && bill <= 50) {
        const totalTip15 = (bill * 15) / 100;
        console.log(`The total tip is ${totalTip15}`)
       return 
    } else {
        const totalTip20 = (bill * 20) / 100;
        console.log(`The total tip is ${totalTip20}`)
       return
    }
}

calcTip(10);