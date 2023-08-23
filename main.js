// CAMBODIA TOWN

const buttonProb = document.getElementById('problemButton');
const probContent = document.getElementById('problemContent');
const buttonDataAnalysis = document.getElementById('dataAnalysisButton');
const dataAnalysisContent = document.getElementById('dataAnalysis');
const buttonInterviews = document.getElementById('interviewButton');
const interviewContent = document.getElementById('userInterviews');
const buttonDesign = document.getElementById('designButton');
const designContent = document.getElementById('designContent');

buttonProb.addEventListener("click", () => {
    probContent.classList.toggle('hidden');
    dataAnalysisContent.classList.add('hidden');
    interviewContent.classList.add('hidden');
    designContent.classList.add('hidden');
    buttonProb.classList.toggle('active');
    buttonDataAnalysis.classList.remove('active');
    buttonInterviews.classList.remove('active');
    buttonDesign.classList.remove('active');
    probContent.scrollTop = 0;
    probContent.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonDataAnalysis.addEventListener("click", () => {
    dataAnalysisContent.classList.toggle('hidden');
    probContent.classList.add('hidden');
    interviewContent.classList.add('hidden');
    designContent.classList.add('hidden');
    buttonDataAnalysis.classList.toggle('active');
    buttonProb.classList.remove('active');
    buttonInterviews.classList.remove('active');
    buttonDesign.classList.remove('active');
    dataAnalysisContent.scrollTop = 0;
    dataAnalysisContent.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonInterviews.addEventListener("click", () => {
    interviewContent.classList.toggle('hidden');
    probContent.classList.add('hidden');
    dataAnalysisContent.classList.add('hidden');
    designContent.classList.add('hidden');
    buttonInterviews.classList.toggle('active');
    buttonProb.classList.remove('active');
    buttonDataAnalysis.classList.remove('active');
    buttonDesign.classList.remove('active');
    interviewContent.scrollTop = 0;
    interviewContent.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonDesign.addEventListener("click", () => {
    designContent.classList.toggle('hidden');
    interviewContent.classList.add('hidden');
    probContent.classList.add('hidden');
    dataAnalysisContent.classList.add('hidden');
    designButton.classList.toggle('active');
    buttonInterviews.classList.remove('active');
    buttonProb.classList.remove('active');
    buttonDataAnalysis.classList.remove('active');
    designContent.scrollTop = 0;
    designContent.scrollIntoView({behavior: 'smooth', block: 'center'});
});

// MACHINE LEARNING

const buttonDataExploration = document.getElementById('dataExplorationButton');
const contentDataExploration = document.getElementById('dataExplorationContent');
const buttonModeling = document.getElementById('modelingButton');
const contentModeling = document.getElementById('modelingContent');
const buttonFindings = document.getElementById('findingsButton');
const contentFindings = document.getElementById('findingsContent');
const buttonLimitations = document.getElementById('limitationsButton');
const contentLimitations = document.getElementById('limitationsContent');
const divLineML = document.getElementById('dividerLineML')


buttonDataExploration.addEventListener("click", () => {
    contentDataExploration.classList.toggle('hidden');
    contentModeling.classList.add('hidden');
    contentFindings.classList.add('hidden');
    contentLimitations.classList.add('hidden');
    buttonDataExploration.classList.toggle('active');
    buttonModeling.classList.remove('active');
    buttonFindings.classList.remove('active');
    buttonLimitations.classList.remove('active');
    contentDataExploration.scrollTop = 0;
    contentDataExploration.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonModeling.addEventListener("click", () => {
    contentModeling.classList.toggle('hidden');
    contentDataExploration.classList.add('hidden');
    contentFindings.classList.add('hidden');
    contentLimitations.classList.add('hidden');
    buttonModeling.classList.toggle('active');
    buttonDataExploration.classList.remove('active');
    buttonFindings.classList.remove('active');
    buttonLimitations.classList.remove('active');
    contentModeling.scrollTop = 0;
    contentModeling.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonFindings.addEventListener("click", () => {
    contentFindings.classList.toggle('hidden');
    contentDataExploration.classList.add('hidden');
    contentModeling.classList.add('hidden');
    contentLimitations.classList.add('hidden');
    buttonFindings.classList.toggle('active');
    buttonDataExploration.classList.remove('active');
    buttonModeling.classList.remove('active');
    buttonLimitations.classList.remove('active');
    contentFindings.scrollTop = 0;
    contentFindings.scrollIntoView({behavior: 'smooth', block: 'center'});
});

buttonLimitations.addEventListener("click", () => {
    contentLimitations.classList.toggle('hidden');
    contentDataExploration.classList.add('hidden');
    contentModeling.classList.add('hidden');
    contentFindings.classList.add('hidden');
    buttonLimitations.classList.toggle('active');
    buttonDataExploration.classList.remove('active');
    buttonModeling.classList.remove('active');
    buttonFindings.classList.remove('active');
    contentLimitations.scrollTop = 0;
    contentLimitations.scrollIntoView({behavior: 'smooth', block: 'center'});
});

// REFUGEE RESETTLEMENT

const buttonProblemRI = document.getElementById('problemButtonRI');
const contentProblemRI = document.getElementById('problemContentRI');
const buttonMethods = document.getElementById('methodsButton');
const contentMethods = document.getElementById('methodsContent');
const buttonFindingsRI = document.getElementById('findingsButtonRI');
const contentFindingsRI = document.getElementById('findingsContentRI');
const buttonRecommendations = document.getElementById('recommendationsButton');
const contentRecommendations = document.getElementById('recommendationsContent');

buttonProblemRI.addEventListener("click", () => {
    contentProblemRI.classList.toggle('hidden');
    contentMethods.classList.add('hidden');
    contentFindingsRI.classList.add('hidden');
    contentRecommendations.classList.add('hidden');
    buttonProblemRI.classList.toggle('active');
    buttonMethods.classList.remove('active');
    buttonFindingsRI.classList.remove('active');
    buttonRecommendations.classList.remove('active');
    contentProblemRI.scrollTop = 0;
    contentProblemRI.scrollIntoView({behavior: 'smooth'});
});

buttonMethods.addEventListener("click", () => {
    contentMethods.classList.toggle('hidden');
    contentProblemRI.classList.add('hidden');
    contentFindingsRI.classList.add('hidden');
    contentRecommendations.classList.add('hidden');
    buttonMethods.classList.toggle('active');
    buttonProblemRI.classList.remove('active');
    buttonFindingsRI.classList.remove('active');
    buttonRecommendations.classList.remove('active');
    contentMethods.scrollTop = 0;
    contentMethods.scrollIntoView({behavior: 'smooth'});
});

buttonFindingsRI.addEventListener("click", () => {
    contentFindingsRI.classList.toggle('hidden');
    contentProblemRI.classList.add('hidden');
    contentMethods.classList.add('hidden');
    contentRecommendations.classList.add('hidden');
    buttonFindingsRI.classList.toggle('active');
    buttonProblemRI.classList.remove('active');
    buttonMethods.classList.remove('active');
    buttonRecommendations.classList.remove('active');
    contentFindingsRI.scrollTop = 0;
    contentFindingsRI.scrollIntoView({behavior: 'smooth'});
});

buttonRecommendations.addEventListener("click", () => {
    contentRecommendations.classList.toggle('hidden');
    contentProblemRI.classList.add('hidden');
    contentMethods.classList.add('hidden');
    contentFindingsRI.classList.add('hidden');
    buttonRecommendations.classList.toggle('active');
    buttonProblemRI.classList.remove('active');
    buttonMethods.classList.remove('active');
    buttonFindingsRI.classList.remove('active');
    contentRecommendations.scrollTop = 0;
    contentRecommendations.scrollIntoView({behavior: 'smooth'});
});
