<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';

const router = useRouter();
interface Data {
    inter: number;
    countdown: number;
}
const data = reactive<Data>({
    inter: 1,
    countdown: 5
});

onBeforeRouteLeave(() => {
    data.inter && clearInterval(data.inter);
});

onMounted(() => {
    data.inter = window.setInterval(() => {
        data.countdown--;
        if (data.countdown === 0) {
            data.inter && clearInterval(data.inter);
            // goBack()
        }
    }, 1000);
});

function goBack() {
    router.push('/');
}

const localPath = router.currentRoute.value.fullPath;
</script>
    
<template>
    <div class="notfound">
        <!-- <svg-icon name="404" class="icon" /> -->
        <div class="icon content">
            <div class="num">
                404
            </div>
            <div class="desc">
                抱歉，你访问的页面
                <strong>{{ localPath }}</strong>
                不存在
            </div>
            <button @click="goBack">
                <strong>{{ data.countdown }} 秒后，返回首页</strong>
            </button>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
.notfound {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    // overflow: hidden ;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .num {
            font-size: 10rem;
        }

        button {
            margin: 0.5rem;
            color: red;
            border-radius: 100px;
            background-color: #2e3f4d;
        }

        span {
            margin: 0 1rem;
        }

        .desc {
            font-size: 20px;
            color: var(--el-text-color-secondary);

            strong {
                font-size: 2rem;
                margin: 2rem;
            }
        }
    }
}
</style>
    