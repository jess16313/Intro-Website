document.getElementById('selectionForm').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {  // 13 is the keycode for the Enter key
        event.preventDefault();  // Stop form submission
        return false;
    }
});

document.getElementById('selectionForm').onsubmit = function(event) {
    event.preventDefault();
    const rolesNeeded = parseInt(document.getElementById('rolesNeeded').value);
    const members = document.querySelectorAll('.member');
    let candidates = [];

    members.forEach(memberDiv => {
        const name = memberDiv.querySelector('.memberName').value;
        const semesters = parseInt(memberDiv.querySelector('.semesters').value);
        const probation = memberDiv.querySelector('.probation').checked;
        let score = 1 + (0.5 * semesters) - (probation ? 0.5 : 0);

        candidates.push({name, score});
    });

    const selectedMembers = selectDancers(candidates, rolesNeeded);
    document.getElementById('results').innerText = `Selected Dancer(s): ${selectedMembers.join(', ')}`;
};

function resetForm() {
    // Reset form inputs or any other elements that need resetting
    document.getElementById('selectionForm').reset();
    document.getElementById('results').innerText = '';
    document.getElementById('resetButton').style.display = 'none'; // Hide the reset button again
}

function addMemberInput() {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'member';
    memberDiv.innerHTML = `
        <label>Name:</label>
        <input type="text" class="memberName" required>
        <label>Semesters:</label>
        <input type="number" class="semesters" required>
        <label>Probation:</label>
        <input type="checkbox" class="probation"><br><br>
    `;
    document.getElementById('memberInputs').appendChild(memberDiv);
}

function selectDancers(candidates, rolesNeeded) {
    let totalWeight = candidates.reduce((sum, member) => sum + member.score, 0);
    let selected = [];

    for (let i = 0; i < rolesNeeded; i++) {
        let random = Math.random() * totalWeight;
        for (let j = 0; j < candidates.length; j++) {
            random -= candidates[j].score;
            if (random <= 0) {
                selected.push(candidates[j].name);
                totalWeight -= candidates[j].score;  // Update total weight
                candidates.splice(j, 1);  // Remove selected member
                break;
            }
        }
    }

    return selected;
}
