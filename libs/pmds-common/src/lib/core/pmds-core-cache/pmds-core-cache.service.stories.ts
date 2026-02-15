////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { componentInfo } from "./story-helpers/pmds-core-cache-component-info-story";

export default {
  title: 'Core/Cache/ Cache Service',
  tags: ['autodocs'],
  argTypes: {
    addCachedElement: {
      description: 'Add element to the cache service setting the id, value and expiration date of the element',
      table: {
        category: 'Method'
      }
    },
    getCachedElement: {
      description: 'get an element from the cache service',
      table: {
        category: 'Method'
      }
    }
  },
  parameters: {
    docs: {
      subtitle: 'PmdsCoreCacheService',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj = {
  parameters: {
    docs: {
       source: { code: null },
    }
  },
	render: () => ({
		template: `
<pre class="language-plaintext text-[13px] text-[#2E3438]">
const cachedDataId = 'exampleId'; // Cache identifier

this.cacheSrv.getCachedElement(cachedInfoId); // For to cache data

this.cacheSrv.getCachedElement(cachedInfoId, data); // For get cached data
</pre>`,
	}),
};
