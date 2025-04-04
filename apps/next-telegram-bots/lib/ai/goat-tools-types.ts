export const goatTools = {
  get_address: {
    description: 'Get the address of the wallet',
    parameters: {
      _def: {
        unknownKeys: 'strip',
        catchall: {
          _def: {
            typeName: 'ZodNever',
          },
          '~standard': {
            version: 1,
            vendor: 'zod',
          },
        },
        typeName: 'ZodObject',
      },
      '~standard': {
        version: 1,
        vendor: 'zod',
      },
      _cached: null,
    },
  },
  get_chain: {
    description: 'Get the chain of the wallet',
    parameters: {
      _def: {
        unknownKeys: 'strip',
        catchall: {
          _def: {
            typeName: 'ZodNever',
          },
          '~standard': {
            version: 1,
            vendor: 'zod',
          },
        },
        typeName: 'ZodObject',
      },
      '~standard': {
        version: 1,
        vendor: 'zod',
      },
      _cached: null,
    },
  },
  get_balance: {
    description: 'Get the balance of the wallet',
    parameters: {
      _def: {
        unknownKeys: 'strip',
        catchall: {
          _def: {
            typeName: 'ZodNever',
          },
          '~standard': {
            version: 1,
            vendor: 'zod',
          },
        },
        typeName: 'ZodObject',
      },
      '~standard': {
        version: 1,
        vendor: 'zod',
      },
      _cached: null,
    },
  },
  sign_message: {
    description: 'Sign a message with the wallet',
    parameters: {
      _def: {
        unknownKeys: 'strip',
        catchall: {
          _def: {
            typeName: 'ZodNever',
          },
          '~standard': {
            version: 1,
            vendor: 'zod',
          },
        },
        typeName: 'ZodObject',
      },
      '~standard': {
        version: 1,
        vendor: 'zod',
      },
      _cached: null,
    },
  },
  send_ETH: {
    description: 'Send ETHto an address.',
    parameters: {
      _def: {
        unknownKeys: 'strip',
        catchall: {
          _def: {
            typeName: 'ZodNever',
          },
        },
        typeName: 'ZodObject',
      },
      _cached: null,
    },
  },
};

export type GoatToolDefinitions = typeof goatTools;
