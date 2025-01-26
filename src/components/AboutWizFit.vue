<template>
  <div class="about-wizFit">
    <h1 class="about-wizFit-challenge">
        What is WizFit Challenge?
    </h1>
    <div class="about-wizFit-video">
        <div class="about-wizFit-arrow">
        </div>
        <div class="about-wizFit-content">
            Watch Video
        </div>
    </div>
  </div>
</template>

<style scoped>
.about-wizFit{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    align-items: center;
}
.about-wizFit-challenge{
    color: #dd117c;
    margin: 0px;
    font-size: 1.5em;
    white-space: nowrap;
}
.about-wizFit-video{
    background-color: #dd117c;
    width: 230px;
    height: 70px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    color: white;
    gap: 17px;
    padding: 18px;
    cursor: pointer;
}
.about-wizFit-arrow{
    width: 0; 
    height: 0; 
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-left: 22px solid white;
}
.about-wizFit-content{
    font-size: 1.5rem;
    font-weight: 500;
    white-space: nowrap;
}
@media screen and (min-width: 650px){
    .about-wizFit{
        flex-direction: row;
    }
    .about-wizFit-challenge{
        font-size: 2em;
    }
}
</style>