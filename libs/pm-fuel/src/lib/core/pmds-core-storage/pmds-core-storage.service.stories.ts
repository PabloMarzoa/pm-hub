////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { componentInfo } from "./story-helpers/pmds-core-storage-component-info-story";

export default {
  title: 'Core/Storage/ Storage Service',
  tags: ['autodocs'],
  argTypes: {
    signOut: {
      description: 'Clear local storage',
      table: {
        category: 'Method'
      }
    },
    setLocalStorageItem: {
      description: 'Add an Item, with the given key, to the local storage',
      table: {
        category: 'Method'
      }
    },
    getLocalStorageItem: {
      description: 'Get the local storage Item with the given key',
      table: {
        category: 'Method'
      }
    },
    deleteLocalStorageItem: {
      description: 'Remove the Item with the given key from the local storage',
      table: {
        category: 'Method'
      }
    },
    setSessionStorageItem: {
      description: 'Add an Item, with the given key, to the session storage',
      table: {
        category: 'Method'
      }
    },
    getSessionStorageItem: {
      description: 'Get the session storage Item with the given key',
      table: {
        category: 'Method'
      }
    },
    deleteSessionStorageItem: {
      description: 'Remove the Item with the given key from the session storage',
      table: {
        category: 'Method'
      }
    },
  },

  parameters: {
    docs: {
      subtitle: 'PmdsCoreStorageService',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string }> = {
  parameters: {
    docs: {
      source: { code: null },
    },
  },
  render: () => ({
    template: `
<pre class="language-plaintext text-[13px] text-[#2E3438]">
this.storageSrv.signOut();

this.storageSrv.setLocalStorageItem(tokenKey:string, token:any);

this.storageSrv.getLocalStorageItem(tokenKey:string);

this.storageSrv.deleteLocalStorageItem(tokenKey:string);

this.storageSrv.setSessionStorageItem(tokenKey:string, token:any);

this.storageSrv.getSessionStorageItem(tokenKey:string);

this.storageSrv.deleteSessionStorageItem(tokenKey:string);
</pre>`,
  }),
};
