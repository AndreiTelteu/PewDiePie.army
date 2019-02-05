<template>
    <div class="app-header">
        <p>head {{ live.subGap }}</p>
        <h2>Essential Linkss</h2>
    </div>
</template>

<script>
import live from "../live";
export default {
    name: "AppHeader",
    data() {
        return {
            live: live,
            msg: "Welcome to Your Vue.js App router !what is this"
        };
    }
};
</script>

<style scoped></style>
