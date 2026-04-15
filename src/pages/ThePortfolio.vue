<script setup>
import { Monitor } from 'lucide-vue-next';
import { Smartphone } from 'lucide-vue-next';
import { ExternalLink } from 'lucide-vue-next';
import { Github } from 'lucide-vue-next';
import { X } from 'lucide-vue-next';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18nStore } from '@/stores/modules/i18n';

const i18n = useI18nStore();
const isVisible = ref(false);
const lightboxOpen = ref(false);
const lightboxImages = ref([]);
const lightboxIndex = ref(0);

function openLightbox(imgFilenames, startIndex = 0) {
  const list = Array.isArray(imgFilenames) ? imgFilenames : [imgFilenames];
  lightboxImages.value = list.map(f => getImage(f));
  lightboxIndex.value = startIndex;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function lightboxPrev() {
  if (lightboxIndex.value > 0) lightboxIndex.value--;
}

function lightboxNext() {
  if (lightboxIndex.value < lightboxImages.value.length - 1) lightboxIndex.value++;
}

function onKeydown(e) {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
}

onMounted(() => {
  isVisible.value = true;
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});

const projects = computed(() => [
  {
    title: i18n.t('proj_finance_title'),
    description: i18n.t('proj_finance_desc'),
    stack: ['TypeScript', 'Vue'],
    type: 'fullstack',
    link: 'https://registry20prod.vercel.app',
    github: 'https://github.com/alv1k/registry20prod',
    desktopImg: 'Registry20.png',
  },
  {
    title: i18n.t('proj_tenant_title'),
    description: i18n.t('proj_tenant_desc'),
    stack: ['HTML', 'CSS', 'React'],
    type: 'frontend',
    link: 'https://arenda.aokdm.ru',
    github: null,
    desktopImg: 'arm-kdm (1).png',
    mobileImg: 'arm-kdm-mobile.png',
  },
  {
    title: i18n.t('proj_vpn_title'),
    description: i18n.t('proj_vpn_desc'),
    stack: ['Python'],
    type: 'fullstack',
    link: 'https://tiinservice.ru',
    github: 'https://github.com/alv1k/vpn-service',
    desktopImg: 'tiinservice.png',
  },
  {
    title: i18n.t('proj_accounting_title'),
    description: i18n.t('proj_accounting_desc'),
    stack: ['HTML', 'CSS', 'Vue2'],
    type: 'frontend',
    link: null,
    github: null,
    desktopImg: 'agreements.png',
    mobileImg: 'agreements-mobile.png',
  },
  {
    title: i18n.t('proj_backend_title'),
    description: i18n.t('proj_backend_desc'),
    stack: ['PHP', 'MySQL'],
    type: 'backend',
    link: null,
    github: null,
    desktopImg: 'php-sql2.png',
  },
  {
    title: i18n.t('proj_timer_title'),
    description: i18n.t('proj_timer_desc'),
    stack: ['TypeScript', 'React'],
    type: 'frontend',
    link: 'https://pet-timer.vercel.app/',
    github: 'https://github.com/alv1k/pet-timer',
    desktopImg: 'pet-timer1.png',
    mobileImg: 'pet-timer2.png',
  },
  {
    title: i18n.t('proj_email_order_title'),
    description: i18n.t('proj_email_order_desc'),
    stack: ['HTML', 'CSS'],
    type: 'email',
    link: null,
    github: null,
    desktopImgs: ['uc-letter.png', 'pe-letter.png'],
    mobileImgs: ['uc-letter-mobile.png', 'pe-letter-mobile.png'],
  },
  {
    title: i18n.t('proj_email_meter_title'),
    description: i18n.t('proj_email_meter_desc'),
    stack: ['HTML', 'CSS'],
    type: 'email',
    link: null,
    github: null,
    desktopImg: 'arm-kdm-letter.png',
    mobileImg: 'arm-kdm-letter-mobile.png',
  },
]);

const images = import.meta.glob('@/assets/images/*', { eager: true });

function getImage(filename) {
  const key = `/src/assets/images/${filename}`;
  return images[key]?.default || '';
}

function getImageUrl(filename) {
  return `https://github.com/alv1k/my_resume/raw/main/src/assets/images/${filename}`;
}

const typeLabels = computed(() => ({
  frontend: i18n.t('type_frontend'),
  backend: i18n.t('type_backend'),
  fullstack: i18n.t('type_fullstack'),
  email: i18n.t('type_email'),
}));

const typeColors = {
  frontend: 'bg-blue-500/20 text-blue-400',
  backend: 'bg-green-500/20 text-green-400',
  fullstack: 'bg-purple-500/20 text-purple-400',
  email: 'bg-amber-500/20 text-amber-400',
};

function getAllImages(project) {
  const imgs = [];
  if (project.desktopImg) imgs.push(project.desktopImg);
  if (project.desktopImgs) imgs.push(...project.desktopImgs);
  if (project.mobileImg) imgs.push(project.mobileImg);
  if (project.mobileImgs) imgs.push(...project.mobileImgs);
  return imgs;
}

function openFromProject(project, filename) {
  const all = getAllImages(project);
  const idx = all.indexOf(filename);
  openLightbox(all, idx >= 0 ? idx : 0);
}
</script>

<template>
  <div class="lg:p-14 p-5">
    <Transition name="fade">
      <div v-show="isVisible">
        <h2 class="text-2xl font-bold mb-8 lg:text-left text-center">{{ i18n.t('portfolio_title') }}</h2>

        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="card-project group"
          >
            <!-- Header -->
            <div class="flex items-start justify-between gap-3 mb-3">
              <h3 class="text-lg font-semibold leading-tight">{{ project.title }}</h3>
              <span
                class="shrink-0 text-xs font-medium px-2 py-1 rounded-full"
                :class="typeColors[project.type]"
              >
                {{ typeLabels[project.type] }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-400 mb-4 leading-relaxed">{{ project.description }}</p>

            <!-- Tech stack badges -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded-md bg-gray-600/50 text-gray-300 font-mono"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Screenshots -->
            <div
              v-if="project.desktopImg || project.mobileImg || project.desktopImgs"
              class="flex gap-4 mb-5 items-end"
            >
              <!-- Single desktop -->
              <div v-if="project.desktopImg" class="flex flex-col gap-1.5">
                <span class="text-xs text-gray-500 flex items-center gap-1"><Monitor :size="12" /> {{ i18n.t('desktop') }}</span>
                <img
                  :src="getImage(project.desktopImg)"
                  class="thumb"
                  alt=""
                  @click="openFromProject(project, project.desktopImg)"
                />
              </div>
              <!-- Multiple desktop -->
              <div v-if="project.desktopImgs" class="flex flex-col gap-1.5">
                <span class="text-xs text-gray-500 flex items-center gap-1"><Monitor :size="12" /> {{ i18n.t('desktop') }}</span>
                <div class="flex gap-2">
                  <img
                    v-for="img in project.desktopImgs"
                    :key="img"
                    :src="getImage(img)"
                    class="thumb"
                    alt=""
                    @click="openFromProject(project, img)"
                  />
                </div>
              </div>
              <!-- Single mobile -->
              <div v-if="project.mobileImg" class="flex flex-col gap-1.5">
                <span class="text-xs text-gray-500 flex items-center gap-1"><Smartphone :size="12" /> {{ i18n.t('mobile') }}</span>
                <img
                  :src="getImage(project.mobileImg)"
                  class="thumb"
                  alt=""
                  @click="openFromProject(project, project.mobileImg)"
                />
              </div>
              <!-- Multiple mobile -->
              <div v-if="project.mobileImgs" class="flex flex-col gap-1.5">
                <span class="text-xs text-gray-500 flex items-center gap-1"><Smartphone :size="12" /> {{ i18n.t('mobile') }}</span>
                <div class="flex gap-2">
                  <img
                    v-for="img in project.mobileImgs"
                    :key="img"
                    :src="getImage(img)"
                    class="thumb"
                    alt=""
                    @click="openFromProject(project, img)"
                  />
                </div>
              </div>
            </div>

            <!-- Links -->
            <div class="flex gap-4 mt-auto pt-3 border-t border-gray-700/50">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink :size="14" />
                <span>{{ i18n.t('open') }}</span>
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Github :size="14" />
                <span>GitHub</span>
              </a>
              <span
                v-if="!project.link && !project.github"
                class="text-sm text-gray-600 italic"
              >
                {{ i18n.t('private_project') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
          <!-- Close -->
          <button class="lightbox-btn lightbox-close" @click="closeLightbox">
            <X :size="24" />
          </button>

          <!-- Prev -->
          <button
            v-if="lightboxImages.length > 1"
            class="lightbox-btn lightbox-prev"
            :class="{ 'opacity-30 pointer-events-none': lightboxIndex === 0 }"
            @click="lightboxPrev"
          >
            <ChevronLeft :size="28" />
          </button>

          <!-- Image -->
          <img
            :src="lightboxImages[lightboxIndex]"
            class="lightbox-img"
            alt=""
            @click.stop
          />

          <!-- Next -->
          <button
            v-if="lightboxImages.length > 1"
            class="lightbox-btn lightbox-next"
            :class="{ 'opacity-30 pointer-events-none': lightboxIndex === lightboxImages.length - 1 }"
            @click="lightboxNext"
          >
            <ChevronRight :size="28" />
          </button>

          <!-- Counter -->
          <div v-if="lightboxImages.length > 1" class="lightbox-counter">
            {{ lightboxIndex + 1 }} / {{ lightboxImages.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card-project {
  display: flex;
  flex-direction: column;
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.3s ease, transform 0.2s ease;
}

.card-project:hover {
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-2px);
}

/* Thumbnails */
.thumb {
  max-height: 8rem;
  border-radius: 8px;
  border: 1px solid rgba(75, 85, 99, 0.5);
  object-fit: cover;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.thumb:hover {
  border-color: rgba(96, 165, 250, 0.6);
  transform: scale(1.03);
  box-shadow: 0 0 12px rgba(96, 165, 250, 0.2);
}

/* Lightbox overlay */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
  user-select: none;
}

.lightbox-btn {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;
}
.lightbox-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.lightbox-close {
  top: 1.5rem;
  right: 1.5rem;
}
.lightbox-prev {
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}
.lightbox-next {
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-counter {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
}

/* Lightbox transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
