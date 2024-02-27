<template lang="">
    <form @submit.prevent="submit">
        <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                class="form-control"
                type="email"
                name=""
                v-model="form.email"
            />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                id="password"
                class="form-control"
                type="password"
                name=""
                v-model="form.password"
            />
            <button type="submit">Log in</button>
        </div>
    </form>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/auth";

const form = ref({ email: "", password: "" });

const userStore = useUserStore();
const submit = () => {
    userStore.login(form);
};
</script>
<style lang=""></style>
