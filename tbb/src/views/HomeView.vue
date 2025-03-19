<script setup>
import logo from '@/assets/image/logo.png';
</script>

<template>
    <div class="home">
        <!-- 顶部导航栏 -->
        <header class="header">
            <div class="header-left">
                <img :src="logo" alt="税务局logo" class="logo" />
                <span class="title">全国统一规范电子税务局</span>
                <div class="location">
                    <span>上海</span>
                </div>
            </div>
            <div class="header-right">
                <a href="#" class="nav-item">环境检测</a>
                <a href="#" class="nav-item">电子税务局APP下载</a>
                <a href="#" class="nav-item">公众服务</a>
                <a href="#" class="nav-item">办税指南</a>
                <a href="#" class="nav-item">办税日历</a>
                <button class="login-btn">登录</button>
            </div>
        </header>

        <!-- 主要内容区 -->
        <main class="main">
            <!-- 标语区域 -->
            <div class="slogan">
                <h1>取之于民</h1>
                <h1>用之于民</h1>
            </div>

            <!-- 常用功能区域 -->
            <section class="common-functions">
                <h2>常用功能</h2>
                <div class="function-grid">
                    <div class="function-item">
                        <!-- <img src="/icons/report.png" alt="简易办税" class="function-icon"> -->
                        <h3>简易办税申报</h3>
                        <p>对收入相对稳定的个人提供简易申报</p>
                    </div>
                    <div class="function-item">
                        <!-- <img src="/icons/payment.png" alt="税费缴纳" class="function-icon"> -->
                        <h3>税费缴纳</h3>
                        <p>税费和其他税收人员、代征代扣人</p>
                    </div>
                    <div class="function-item">
                        <!-- <img src="/icons/invoice.png" alt="蓝字发票开具" class="function-icon"> -->
                        <h3>蓝字发票开具</h3>
                        <p>因发生销售业务需要开具增值税发票</p>
                    </div>
                    <div class="function-item">
                        <!-- <img src="/icons/enterprise.png" alt="居民企业" class="function-icon"> -->
                        <h3>居民企业（查账征收）企业所得税月（季）度申报</h3>
                        <p>居民企业所得税月度或季度申报</p>
                    </div>
                </div>
            </section>
        </main>

        <!-- 办税日历提示 -->
        <div class="calendar-notice">办税日历: 3月征期已结束，请关注下月征期</div>
    </div>
</template>

<style lang="scss" scoped>
// 变量定义
$primary-color: #4481eb;
$secondary-color: #04befe;
$accent-color: #ff6b6b;
$text-primary: #333;
$text-secondary: #666;
$white: #fff;

.home {
    min-height: 100vh;
    background-color: #f5f5f5;
}

.header {
    background: linear-gradient(to right, $primary-color, $secondary-color);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;

    &-left {
        display: flex;
        align-items: center;
        gap: 1rem;

        .logo {
            height: 40px;
        }

        .title {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .location {
            border: 1px solid rgba($white, 0.3);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
        }
    }

    &-right {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .nav-item {
            color: $white;
            text-decoration: none;
            transition: opacity 0.3s ease;

            &:hover {
                opacity: 0.8;
            }
        }

        .login-btn {
            background-color: $accent-color;
            color: $white;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: darken($accent-color, 10%);
            }
        }
    }
}

.main {
    position: relative;
    min-height: calc(100vh - 72px);
    //background-image: url('/bg-greatwall.jpg');
    background-size: cover;
    background-position: center;
    padding: 2rem;

    .slogan {
        color: $white;
        font-size: 2.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        margin-bottom: 4rem;
    }
}

.common-functions {
    background-color: $white;
    border-radius: 8px;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        color: $text-primary;
        margin-bottom: 2rem;
        text-align: center;
    }

    .function-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .function-item {
        text-align: center;
        padding: 1.5rem;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .function-icon {
            width: 64px;
            height: 64px;
            margin-bottom: 1rem;
        }

        h3 {
            color: $text-primary;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        p {
            color: $text-secondary;
            font-size: 0.9rem;
        }
    }
}

.calendar-notice {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($white, 0.9);
    padding: 0.5rem;
    text-align: center;
    color: $text-secondary;
}
</style>
