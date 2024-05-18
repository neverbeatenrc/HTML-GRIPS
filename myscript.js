// Function for sending money
function sendMoney() {
    // Retrieve field values
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;

    // Find the sender's account balance
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);

    // Check if the balance is sufficient
    if (enterAmount > enterSAmount) {
        alert("Insufficient balance.");
    } else {
        // Find the recipient's account balance
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = enterSAmount - enterAmount;

        // Update account balances
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;

        // Display a successful transaction alert
        alert(`Successful transaction!!\n$${enterAmount} sent to ${enterName}`);

        // Transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} sent from sender with Email-id ${enterSName}@email.com
  to recipient with Email-id ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
