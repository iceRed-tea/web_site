<script setup>
import logo from '@/assets/image/logo.png';
import home from '@/assets/image/home.gif';
import gg from '@/assets/image/zmdGg.png';
import home1 from '@/assets/image/home1.jpg';
import home2 from '@/assets/image/home2.jpg';
import service from '@/assets/image/service.png';
import head_rczp from '@/assets/image/head_rczp.png';
import head_wza from '@/assets/image/head_wza.png';
import head_search from '@/assets/image/head_search.png';
import leftPC from '@/assets/image/leftPC.png';
import leftApp from '@/assets/image/leftApp.png';
import leftEwm from '@/assets/image/leftEwm.png';
import leftCf from '@/assets/image/leftCf.png';
import leftXb from '@/assets/image/leftXb.png';
const slide = ref(1);
const totalSlides = 5; // 总幻灯片数量

const handleWheel = event => {
    // 防抖，避免滚动太快
    if (event.target.classList.contains('scrolling')) return;

    // 在第一张时禁止向上滚动
    if (slide.value === 1 && event.deltaY < 0) return;
    // 在最后一张时禁止向下滚动
    if (slide.value === totalSlides && event.deltaY > 0) return;

    event.target.classList.add('scrolling');
    setTimeout(() => {
        event.target.classList.remove('scrolling');
    }, 1000);

    // 向下滚动，切换到下一张
    if (event.deltaY > 0) {
        slide.value++;
    }
    // 向上滚动，切换到上一张
    else if (event.deltaY < 0) {
        slide.value--;
    }
};
</script>

<template>
    <div class="home">
        <header class="header">
            <div class="header-left">
                <img :src="logo" alt="湖南银行logo" class="logo" />
            </div>
            <div class="column">
                <div class="top-bar">
                    <div class="service-links">
                        <a href="#" class="service-link">
                            <q-img :src="service" width="16px" />
                            在线客服
                        </a>
                        <a href="#" class="service-link">
                            <q-img :src="head_rczp" width="16px" />
                            人才招聘
                        </a>
                        <a href="#" class="service-link">
                            <q-img :src="head_wza" width="16px" />
                            无障碍
                        </a>
                        <q-img :src="head_search" width="22px" />
                    </div>
                </div>
                <nav class="main-nav">
                    <a href="#" class="nav-item active">首页</a>
                    <a href="#" class="nav-item">个人业务</a>
                    <a href="#" class="nav-item">公司业务</a>
                    <a href="#" class="nav-item">普惠金融</a>
                    <a href="#" class="nav-item">金融市场</a>
                    <a href="#" class="nav-item">网络金融</a>
                    <a href="#" class="nav-item">投资者服务</a>
                    <a href="#" class="nav-item">关于我们</a>
                </nav>
            </div>
        </header>
        <q-carousel
            v-model="slide"
            vertical
            swipeable
            animated
            control-color="white"
            navigation
            height="100vh"
            class="bg-purple text-white shadow-1 rounded-borders"
            transition-prev="slide-down"
            transition-next="slide-up"
            @wheel.prevent="handleWheel"
        >
            <q-carousel-slide :name="1" :img-src="home">
                <div class="announcement">
                    <div class="announcement-header">
                        <q-img :src="gg" width="20px" />
                        <span>公告</span>
                    </div>
                    <div class="announcement-content">
                        <ul>
                            <li>
                                <a
                                    href="/96599/2025-03/12/article_2025031217374721999.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南省货币真伪鉴定机构信息公示表"
                                    istitle="true"
                                >
                                    湖南省货币真伪鉴定机...
                                </a>
                                <span>2025-03-12</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2025-01/13/article_2025011316264555677.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行关于下线老三方存管业务的通告"
                                    istitle="true"
                                >
                                    湖南银行关于下线老三...
                                </a>
                                <span>2025-01-13</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2025-01/09/article_2025010908540119564.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行公务卡领用合约（2025年适用版）"
                                    istitle="true"
                                >
                                    湖南银行公务卡领用合...
                                </a>
                                <span>2025-01-09</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2025-01/09/article_2025010908475226569.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行信用卡领用合约—阅读版"
                                    istitle="true"
                                >
                                    湖南银行信用卡领用合...
                                </a>
                                <span>2025-01-09</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2025-01/09/article_2025010908465655644.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行信用卡领用合约—仲裁版"
                                    istitle="true"
                                >
                                    湖南银行信用卡领用合...
                                </a>
                                <span>2025-01-09</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2025-01/09/article_2025010908454727040.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行信用卡领用合约—诉讼版"
                                    istitle="true"
                                >
                                    湖南银行信用卡领用合...
                                </a>
                                <span>2025-01-09</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2024-12/25/article_2024122514133092309.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行关于2025年元旦节网点营业情况的通告"
                                    istitle="true"
                                >
                                    湖南银行关于2025年元...
                                </a>
                                <span>2024-12-25</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2024-11/05/article_2024110510475878512.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行关于完善个人住房贷款利率定价机制常见问答"
                                    istitle="true"
                                >
                                    湖南银行关于完善个人...
                                </a>
                                <span>2024-11-05</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2024-11/05/article_2024110510452363323.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行关于完善个人住房贷款利率定价机制有关事项的公告"
                                    istitle="true"
                                >
                                    湖南银行关于完善个人...
                                </a>
                                <span>2024-11-05</span>
                            </li>
                            <li>
                                <a
                                    href="/96599/2024-11/01/article_2024110109041089359.shtml"
                                    onclick="void(0)"
                                    target="_blank"
                                    title="湖南银行股份有限公司关于启用防伪电子印章的公告"
                                    istitle="true"
                                >
                                    湖南银行股份有限公司...
                                </a>
                                <span>2024-11-01</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" :img-src="home1" />
            <q-carousel-slide :name="3" :img-src="home2" />
            <q-carousel-slide :name="4" :img-src="home2" />
            <q-carousel-slide :name="5" :img-src="home2" />
        </q-carousel>
        <div class="fixed-sidebar">
            <div class="sidebar-item">
                <q-img :src="leftPC" width="30px" />
                <q-tooltip anchor="center right" self="center left" class="custom-tooltip">
                    <div class="tooltip-content">
                        <div class="tooltip-item">
                            <q-icon name="person" size="20px" class="tooltip-icon" />
                            <div class="tooltip-text">
                                <span>个人网上银行登录</span>
                                <q-icon name="chevron_right" size="20px" class="arrow-icon" />
                            </div>
                        </div>
                        <div class="sub-text">·下载中心 ·安装指南</div>
                        <div class="tooltip-item">
                            <q-icon name="business" size="20px" class="tooltip-icon" />
                            <div class="tooltip-text">
                                <span>企业网上银行登录</span>
                                <q-icon name="chevron_right" size="20px" class="arrow-icon" />
                            </div>
                        </div>
                        <div class="sub-text">·下载中心 ·安装指南</div>
                        <div class="tooltip-item">
                            <q-icon name="phone_iphone" size="20px" class="tooltip-icon" />
                            <div class="tooltip-text">手机银行</div>
                            <q-icon name="chevron_right" size="20px" class="arrow-icon" />
                        </div>
                        <div class="tooltip-item">
                            <q-icon name="qr_code" size="20px" class="tooltip-icon" />
                            <div class="tooltip-text">直销银行</div>
                            <q-icon name="chevron_right" size="20px" class="arrow-icon" />
                        </div>
                    </div>
                </q-tooltip>
            </div>
            <div class="sidebar-item">
                <q-img :src="leftApp" width="30px" />
            </div>
            <div class="sidebar-item">
                <q-img :src="leftEwm" width="30px" />
            </div>
            <div class="sidebar-item">
                <q-img :src="leftXb" width="30px" />
            </div>
            <div class="sidebar-item">
                <q-img :src="leftCf" width="30px" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    min-height: 100vh;
    background-color: #fff;
    width: 100%;

    :deep(.q-carousel) {
        .q-carousel__navigation {
            .q-carousel__navigation-inner {
                flex-direction: column;
                position: fixed;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
                gap: 10px;

                .q-btn {
                    margin: 0;
                    opacity: 0.6;
                    transition: opacity 0.3s ease;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        // 添加平滑滚动效果
        .q-carousel__slides {
            transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) !important;
        }
    }
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8.5%;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    z-index: 100;
    border-bottom: 1px solid #fff;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;

    .top-bar {
        width: 100%;
        padding: 8px 0;
        z-index: 101;
        display: flex;
        justify-content: flex-end;

        .service-links {
            display: flex;
            gap: 1.5rem;
            align-items: center;

            .service-link {
                color: #fff;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
                white-space: nowrap;

                &:hover {
                    opacity: 0.8;
                }

                i {
                    font-size: 1.1rem;
                }
            }
        }
    }

    .logo {
        height: 50px;
        margin-right: 2rem;
    }

    .main-nav {
        display: flex;
        gap: 2rem;
        flex: 1;
        justify-content: center;

        .nav-item {
            text-decoration: none;
            font-size: 1rem;
            padding: 0.2rem 0;
            position: relative;
            white-space: nowrap;
            border-bottom: 2px solid #051848;
            &.active {
                font-weight: bold;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                }
            }

            &:hover {
                border-bottom: 2px solid #fff;
            }
        }
    }

    .header-right {
        display: flex;
        align-items: center;
    }
}

.announcement {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    width: 60%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    padding: 5px 20px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 15px;

    .announcement-header {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.2rem;
        min-width: fit-content;
    }
    .announcement-content {
        flex: 1;
        overflow: hidden;
        ul {
            display: flex;
            align-items: center;
            gap: 10px;
            overflow: hidden;
            flex-wrap: nowrap;
            animation: scrollAnnouncement 12s linear infinite;
            li {
                flex: none;
                min-width: fit-content;
            }
        }
    }
}

@keyframes scrollAnnouncement {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-50% - 10px));
    }
}

.fixed-sidebar {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .sidebar-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.5);
        width: fit-content;
        &:hover {
            cursor: pointer;
            background: #0c3190;
        }
    }
}

.custom-tooltip {
    .tooltip-content {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 4px;
        padding: 10px 0;
    }

    .sub-text {
        font-size: 12px;
        color: #666;
        margin-top: 2px;
        padding-left: 30px;
    }

    .tooltip-item {
        display: flex;
        align-items: center;
        margin: 10px 10px;
        padding: 8px 15px;
        color: #333;
        cursor: pointer;
        transition: all 0.3s ease;
        background: #0c3190;
        color: white;
        border-radius: 5px;
        .tooltip-icon {
            margin-right: 15px;
        }

        .tooltip-text {
            flex: 1;
            font-size: 14px;
        }

        .arrow-icon {
            opacity: 0.5;
        }

        &:hover {
            .sub-text {
                color: rgba(255, 255, 255, 0.8);
            }
            .arrow-icon {
                opacity: 1;
            }
        }
    }
}

:deep(.q-tooltip) {
    max-width: none !important;
}
</style>
