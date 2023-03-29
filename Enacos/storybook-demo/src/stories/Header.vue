<template>
    <header>
        <div class="wrapper">
            <div>
                <img src="../assets/logo.svg" alt="logo">
            </div>
            <div>
                <span class="welcome" v-if="user">Welcome, <b>{{ user.name }}</b>!</span>
                <Button size="small" @click="$emit('logout')" label="Log out" v-if="user"/>
                <Button size="small" @click="$emit('login')" label="Log in" v-if="!user"/>
                <Button primary size="small" @click="$emit('createAccount')" label="Sign up" v-if="!user"/>
            </div>
        </div>
    </header>
</template>

<script>
import './header.css';
import Button from '../components/Button.vue';

export default {
    name: 'my-header',

    components: {Button},

    props: {
        user: {
            type: Object,
        },
    },

    emits: ['login', 'logout', 'createAccount'],
};
</script>
