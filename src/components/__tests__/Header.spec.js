import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header.vue';
import { createRouter, createWebHistory } from 'vue-router';


describe('Header', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/example/:id',
        name: 'Example',
      },
    ],
  });

  it('renders correctly', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('updates query value when input changes', async () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    const input = wrapper.find('.main-header-filter-search');
    await input.setValue('test');
    expect(wrapper.vm.query).toBe('test');
  });

});
