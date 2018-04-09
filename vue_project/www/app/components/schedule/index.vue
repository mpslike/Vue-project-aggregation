<template>
    <div>
        <ButtonGroup>
            <Button @click="$router.push('/schedule/month')">月视图</Button>
            <Button @click="$router.push('/schedule/week')">周视图</Button>
            <Button @click="$router.push('/schedule/day')">日视图</Button>
        </ButtonGroup>
        <router-view></router-view>
    </div>
</template>