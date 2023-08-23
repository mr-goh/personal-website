const buttonIds = ["problemButton", "dataAnalysisButton", "interviewButton", "designButton"];
const contentMap = {
    'problemButton': 'problemContent', 
    'dataAnalysisButton': 'dataAnalysis',
    'interviewButton': 'userInterviews',
    'designButton': 'designContent'
};

const divLine = document.getElementById('dividerLine');

buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentMap[buttonId])

    buttonId.addElementById("click", () => {
        if(contentMap[buttonId].classList.contains('hidden') && divLine.classList.contains('hidden')) {
            divLine.classList.toggle('hidden');
        } else if (!contentMap[buttonId].classList.contains('hidden') && !divLine.classList.contains('hidden')) {
            divLine.classList.add('hidden');
        } else {

        }
        contentMap[buttonId].classList.toggle('hidden');
        buttonIds.forEach(buttonCheck => {
            if(buttonId !== buttonCheck) {
                contentMap[buttonCheck].classList.add('hidden');
            } else {

            }
        });
        buttonIds.forEach(buttonActive => {
            if(buttonId !== buttonActive) {
                buttonActive.classList.remove('active');
            } else {
                
            }
        });
    });
});