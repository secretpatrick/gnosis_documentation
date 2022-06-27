/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{type: 'autogenerated', dirName: '.'}],
  
  quickstart: [{type: 'autogenerated', dirName: 'quick-start'}], 
  
  validators: [
    'validators/README',
    'validators/incentives',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      link: {type: 'doc', id: 'validators/get-started/README'},
      items: [
        "validators/get-started/responsibilities",
        "validators/get-started/technical-requirements",
        "validators/get-started/setup-gnosis-chain-node",
      ],
    },
    {
      type: 'category',
      label: 'Client setup',
      collapsed: true,
      link: {type: 'doc', id: 'validators/client/README'},
      items: [
        "validators/client/lighthouse",
        "validators/client/nimbus",
        "validators/client/prysm",
        "validators/client/nethermind-node-setup",
        "validators/client/connect-to-a-gc-node",
        "validators/client/node-monitoring",
        "validators/client/migrate-clients",
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      //link: {type: 'doc', id: 'validators/operations/README'},
      items: [
        "validators/operations/README",
        "validators/operations/deposit-safety-instructions",
        "validators/operations/manual-deposit-method",
        "validators/operations/convert-gno-to-mgno",
        "validators/operations/validator-withdrawals",
        "validators/operations/voluntary-exit",
        "validators/operations/migrating-a-validator",
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Explorer',
          href: 'https://beacon.gnosischain.com/',
        },
        'validators/tools/beacon-chain-analytics',
        {
          type: 'link',
          label: 'Deposit Tool',
          href: 'https://deposit.gnosischain.com/',
        },
        'validators/tools/liquid-staking',
      ],
    },
    {
      type: 'link',
      label: 'Landing Page',
      href: 'https://www.gnosischain.com/',
    },
    
  ],

  bridge: [{type: 'autogenerated', dirName: 'bridges'}],

  specs: [
    'specs/README',
    {
      type: 'category',
      label: 'Beacon Chain',
      collapsed: true,
      link: {type: 'doc', id: 'specs/gbc/README'},
      items: [
        'specs/gbc/upgradeability',
        'specs/gbc/faq',
      ],
    },
    {
      type: 'category',
      label: 'Hard Forks',
      collapsed: true,
      link: {type: 'doc', id: 'specs/hard-forks/README'},
      items: [
        'specs/hard-forks/21735000',
        'specs/hard-forks/19040000',
        'specs/hard-forks/16101500',
        'specs/hard-forks/9186425',
        'specs/hard-forks/7298030',
        'specs/hard-forks/2508800',
        'specs/hard-forks/1604400',
        'specs/hard-forks/spec.json-update',
      ],
    },
    {
      type: 'category',
      label: 'Consensus',
      collapsed: true,
      link: {type: 'doc', id: 'specs/consensus/README'},
      items: [
        'specs/consensus/aura',
        'specs/consensus/posdao',
        'specs/consensus/gbc',
      ],
    },
    'specs/security-audit',
    'specs/media-kit',
    'specs/community',
  ],

  governance: [
    'governance/README',
    'governance/community',
    {
      type: 'category',
      label: 'Gnosis Chain Bridge',
      collapsed: false,
      items: [
        'governance/bridge',
        'governance/board-decisions',
      ],
    },
  ],
};

module.exports = sidebars;
