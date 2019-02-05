<template>
    <div id="app">
        <AppHeader />
        <p>pewds - {{ live.channels.PewDiePie.subs }}</p>
        <p>tseries - {{ live.channels.TSeries.subs }}</p>
        <p>gap - {{ live.subGap }}</p>
    </div>
</template>

<script>
import live from "./live";
import AppHeader from "./components/AppHeader";

export default {
    name: "App",
    components: {
        AppHeader
    },
    methods: {},
    data() {
        live.start();
        return {
            live: live
        };
    }
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
