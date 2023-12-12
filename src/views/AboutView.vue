<template>
    <div class="about_container">
        <div class="about_me">
            <div class="about_me_img">
                <span><img src="@/assets/imgs/webdeveloper.jpg" alt="about me"></span>
            </div>
            <div class="about_me_text">
                <span>My name is David Santos and I am 21 years old. 
                    I am a full stack developer in which the main skills 
                    I have are: Javascript, Typescript, C, C#, HTML, CSS, SQL, Azure and Git.
                </span>
            </div>
        </div>

        <div class="about_project">
            <div class="about_project_img">
                <img src="@/assets/imgs/project.png" alt="project" />
            </div>
            <div class="about_project_text">
                This project was created to provide information 
                about your connection and network 
                such as IP, DNS, speed, among others.
                <br />
                It was assembled using the VueJS framework 
                together with Microsoft's superset, Typescript. 
                Along with the features of Vue Router.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default{
        name: 'AboutView',
    }
</script>

<style scoped>
    @import url('@/assets/css/about.css');
</style>