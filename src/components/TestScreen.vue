<template>
    <div class="testScreenContainer">
        <div v-if="!testCompleted" class="testScreen-wrapper">
            <p class="testBannerTxt">Answer the following Questions</p>
            <v-row>
                <v-col cols="8">
                    <p class="testSubTxt">Choose the right answer and click next or click skip if you don’t know the answer.
                    </p>
                </v-col>
                <v-col cols="4">
                    <div class="clockTimerWrapper">
                        <img class="clock-img" :src="clock" />
                        <!-- counter is there -->
                        <CounterClock />
                    </div>
                </v-col>
            </v-row>
            <v-divider class="testScreenDivider"></v-divider>

            <h1 class="questionTest">{{ currentQuestion + 1 }}. {{ questions[currentQuestion].question }}</h1>

            <div class="optionsWrapper">
                <v-radio-group v-model="selectedAnswer">
                    <v-row>
                        <v-col v-for="(option, index) in questions[currentQuestion].options" :key="index" cols="6">
                            <v-radio color="#4B9AFA" :label="option" :value="index"></v-radio>
                        </v-col>
                    </v-row>
                </v-radio-group>
            </div>
            <div class="btnDivWrapper">
                <v-btn @click="skipQuestion" class="skipBtn"
                    :disabled="isLastQuestion || selectedAnswer !== null">Skip</v-btn>
                <v-btn @click="nextQuestion" class="nextBtn" :disabled="selectedAnswer === null"> {{ currentQuestion ===
                    questions.length - 1 ? "Finished" :
                    "Next" }}</v-btn>
            </div>
        </div>
        <div v-else class="testScreen-wrapper">
            <div class="headingWrapper">
                <v-row>
                    <v-col cols="6">
                        <p class="p-tags stepsHead">Final <span class="stepsHead-span">Result</span></p>
                        <p class="p-tags stepsSubHead">Your result and analytics</p>
                    </v-col>
                    <v-col cols="6">
                        <div class="passedWrapper">
                            <!-- <p class="passed-failed">PASSED</p> -->
                            <img :src="down" class="download" />
                        </div>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="testScreenDivider"></v-divider>
            <div class="chartSpan-DivHolder">
                <div class="chartSpan">
                    <Doughnut class="myChart" :data="chartConfig.data" :options="chartConfig.options"
                        :plugins="chartConfig.plugins" />
                    <span v-motion :initial="{ opacity: 0 }"
                        :enter="{ opacity: 1, transition: { duration: 300, delay: 800, ease: 'easeIn' } }"
                        class="chartPercentage">
                        <p>60%</p>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <div class="progress">
                        <div class="correct"><span class="progressTxt">Correct</span></div>
                        <div class="wrong"><span class="progressTxt">Wrong</span></div>
                        <div class="skipped"><span class="progressTxt">Skipped</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import clock from '../assets/imgs/clock.svg'
import CounterClock from '../components/helperComponents/counterClock.vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'
import down from '../assets/imgs/down.png'
import { data, options } from './chartConfig'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    components: {
        CounterClock: CounterClock,
        Doughnut
    },
    data() {
        return {
            questions: [
                {
                    question: "What is an array?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an Js?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an Html?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "What is an CSS?",
                    options: [
                        "An array is a collection of similar data elements",
                        "An array is a Lorem Ipsum text baseline",
                        "An array is a data structure",
                        "An array is not used in programming",
                    ],
                    correctAnswer: 0,
                },
            ],
            currentQuestion: 0,
            selectedAnswer: null,
            testCompleted: false,
            clock: clock,
            // chartConfig: chartConfig,
            down: down,
            chartConfig: {
                data,
                options,
                // other chart configurations...
            },



        };
    },
    computed: {
        isLastQuestion() {
            return this.currentQuestion === this.questions.length - 1;
        },
    },
    methods: {
        nextQuestion() {
            if (this.selectedAnswer !== null) {

                this.currentQuestion++;
                this.selectedAnswer = null;
                if (this.currentQuestion === this.questions.length) {
                    this.testCompleted = true;
                }
            } else {
                alert("Please select an answer before moving to the next question.");
            }
        },
        skipQuestion() {
            this.currentQuestion++;
            this.selectedAnswer = null;
            if (this.currentQuestion === this.questions.length) {
                this.testCompleted = true;
            }
        },
    },
};
</script>

<style scoped>
.testScreenContainer {
    background: #00102C;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
}

.questionTest {
    color: #FFF;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
}

.chartSpan {
    /* background-color: red; */
    width: 500px;
    height: 500px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2%; */
    padding: 45px;
    background: rgba(75, 154, 250, 0.1);
    position: relative;
}

.myChart {
    z-index: 5;
}

.chartPercentage {
    color: #4B9AFA;
    text-align: center;
    font-family: Open Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    position: absolute;
    background-color: white;
    width: 240px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress {
    display: flex;
    width: 100%;
    height: 51px;
    margin: 5% 0;
}

.progressTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.correct {
    background-color: #4B9AFA;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrong {
    background-color: #FF9D01;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skipped {
    background-color: #183C6F;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.testScreen-wrapper {
    max-width: 85vw;
    width: 100%;
    padding-top: 5%;
}

.clockTimerWrapper {
    display: flex;
    justify-content: end;
}

.chartSpan-DivHolder {
    display: flex;
    justify-content: center;
}

.testBannerTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
}

.testSubTxt {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.testScreenDivider {
    margin: 2% 0 4% 0;
}

.clock-img {
    margin-right: 15px;
    margin-top: -5px;
}

.download {
    cursor: pointer;
}

.optionsWrapper {
    border-radius: 30px;
    border: 2px solid rgba(75, 154, 250, 0.3);
    padding: 2%;
}

.passedWrapper {
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;
}

.options-margin {
    margin: 0 0 20px 0;
}

.nextBtn {
    border-radius: 60px;
    background: #4B9AFA;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 168px;
    height: 68px;
}

.passed-failed {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}



.stepsHead {
    color: #F5F5F5;
    font-family: Open Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5% !important;
}

.stepsHead-span {
    color: #4B9AFA;
    font-weight: 700;
}

.btnDivWrapper {
    padding-top: 20px;
    display: flex;
    justify-content: end;
}

.skipBtn {
    border-radius: 60px;
    border: 2px solid #4B9AFA;
    color: #4B9AFA;
    background: transparent;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 168px;
    height: 68px;
    margin: 0 10px;
}

.testCompletedDiv {
    margin: auto 0;
}

.testCompletedTtxt {
    font-size: 300%;
}

.spantag {
    color: #4B9AFA;
}
</style>