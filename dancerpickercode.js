document.getElementById('selectionForm').onsubmit = function(event) {
    event.preventDefault();
    const rolesNeeded = parseInt(document.getElementById('rolesNeeded').value);
    const likelihoods = document.querySelectorAll('.likelihood');
    let totalLikelihood = 0;
    likelihoods.forEach(input => {
        totalLikelihood += parseFloat(input.value);
    });
    const result = Math.min(rolesNeeded, Math.round(totalLikelihood));
    document.getElementById('results').innerText = `Number of Needed Dancers: ${result}`;
};

function addMemberInput() {
    const memberDiv = document.createElement('div');
    memberDiv.innerHTML = `
        <label>Name:</label>
        <input type="text" name="memberName" required>
        <label>Likelihood (0-1):</label>
        <input type="text" class="likelihood" name="memberLikelihood" required><br><br>
    `;
    document.getElementById('memberInputs').appendChild(memberDiv);
}
