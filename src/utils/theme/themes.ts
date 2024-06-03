import { Color } from '@/models/themes'

const colorOrder = [
  'Slate',
  'Gray',
  'Zinc',
  'Neutral',
  'Stone',
  'Red',
  'Orange',
  'Amber',
  'Yellow',
  'Lime',
  'Green',
  'Emerald',
  'Teal',
  'Cyan',
  'Sky',
  'Blue',
  'Indigo',
  'Violet',
  'Purple',
  'Fuchsia',
  'Pink',
  'Rose',
]

const colors = [
  {
    name: 'pink',
    label: 'Pink',
    activeColor: {
      light: '330 100% 71%',
      dark: '330 70% 50%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '340 50% 10%',
        card: '0 0% 100%',
        'card-foreground': '340 50% 10%',
        popover: '0 0% 100%',
        'popover-foreground': '340 50% 10%',
        primary: '330 100% 71%',
        'primary-foreground': '210 20% 98%',
        secondary: '330 21% 91%',
        'secondary-foreground': '330 30% 27.8%',
        muted: '330 21% 91%',
        'muted-foreground': '330 10% 50%',
        accent: '330 21% 91%',
        'accent-foreground': '330 30% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '330 15% 91%',
        input: '330 15% 91%',
        ring: '330 100% 71%',
      },
      dark: {
        background: '340 50% 10%',
        foreground: '210 20% 98%',
        card: '340 50% 10%',
        'card-foreground': '210 20% 98%',
        popover: '340 50% 10%',
        'popover-foreground': '210 20% 98%',
        primary: '330 70% 50%',
        'primary-foreground': '210 20% 98%',
        secondary: '330 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '330 40% 20%',
        'muted-foreground': '330 20% 65%',
        accent: '330 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '330 40% 20%',
        input: '330 40% 20%',
        ring: '330 70% 50%',
      },
    },
  },
  {
    name: 'fuchsia',
    label: 'Fuchsia',
    activeColor: {
      light: '300 100% 66%',
      dark: '300 70% 50%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '300 24% 16%',
        card: '0 0% 100%',
        'card-foreground': '300 24% 16%',
        popover: '0 0% 100%',
        'popover-foreground': '300 24% 16%',
        primary: '300 100% 66%',
        'primary-foreground': '210 20% 98%',
        secondary: '300 19% 91%',
        'secondary-foreground': '300 30% 27.8%',
        muted: '300 19% 91%',
        'muted-foreground': '300 10% 50%',
        accent: '300 19% 91%',
        'accent-foreground': '300 30% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '300 13% 91%',
        input: '300 13% 91%',
        ring: '300 100% 66%',
      },
      dark: {
        background: '300 24% 16%',
        foreground: '210 20% 98%',
        card: '300 24% 16%',
        'card-foreground': '210 20% 98%',
        popover: '300 24% 16%',
        'popover-foreground': '210 20% 98%',
        primary: '300 70% 50%',
        'primary-foreground': '210 20% 98%',
        secondary: '300 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '300 40% 20%',
        'muted-foreground': '300 20% 65%',
        accent: '300 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '300 40% 20%',
        input: '300 40% 20%',
        ring: '300 70% 50%',
      },
    },
  },
  {
    name: 'purple',
    label: 'Purple',
    activeColor: {
      light: '270 95% 68%',
      dark: '270 70% 50%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '270 50% 10%',
        card: '0 0% 100%',
        'card-foreground': '270 50% 10%',
        popover: '0 0% 100%',
        'popover-foreground': '270 50% 10%',
        primary: '270 95% 68%',
        'primary-foreground': '210 20% 98%',
        secondary: '270 16.7% 90%',
        'secondary-foreground': '270 25% 30%',
        muted: '270 16.7% 90%',
        'muted-foreground': '270 10% 50%',
        accent: '270 16.7% 90%',
        'accent-foreground': '270 25% 30%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '270 13% 91%',
        input: '270 13% 91%',
        ring: '270 95% 68%',
      },
      dark: {
        background: '270 50% 10%',
        foreground: '210 20% 98%',
        card: '270 50% 10%',
        'card-foreground': '210 20% 98%',
        popover: '270 50% 10%',
        'popover-foreground': '210 20% 98%',
        primary: '270 70% 50%',
        'primary-foreground': '210 20% 98%',
        secondary: '270 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '270 40% 20%',
        'muted-foreground': '270 20% 60%',
        accent: '270 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '270 40% 20%',
        input: '270 40% 20%',
        ring: '270 70% 50%',
      },
    },
  },
  {
    name: 'indigo',
    label: 'Indigo',
    activeColor: {
      light: '231 48% 48%',
      dark: '231 40% 34%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '240 30% 8%',
        card: '0 0% 100%',
        'card-foreground': '240 30% 8%',
        popover: '0 0% 100%',
        'popover-foreground': '240 30% 8%',
        primary: '231 48% 48%',
        'primary-foreground': '210 20% 98%',
        secondary: '240 18% 90%',
        'secondary-foreground': '231 25% 30%',
        muted: '240 18% 90%',
        'muted-foreground': '231 15% 50%',
        accent: '240 18% 90%',
        'accent-foreground': '231 25% 30%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '240 15% 91%',
        input: '240 15% 91%',
        ring: '231 48% 48%',
      },
      dark: {
        background: '240 30% 8%',
        foreground: '210 20% 98%',
        card: '240 30% 8%',
        'card-foreground': '210 20% 98%',
        popover: '240 30% 8%',
        'popover-foreground': '210 20% 98%',
        primary: '231 40% 34%',
        'primary-foreground': '210 20% 98%',
        secondary: '231 30% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '231 30% 20%',
        'muted-foreground': '231 20% 60%',
        accent: '231 30% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '231 30% 20%',
        input: '231 30% 20%',
        ring: '231 40% 34%',
      },
    },
  },
  {
    name: 'sky',
    label: 'Sky',
    activeColor: {
      light: '203 89% 53%',
      dark: '203 78% 44%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '210 50% 5%',
        card: '0 0% 100%',
        'card-foreground': '210 50% 5%',
        popover: '0 0% 100%',
        'popover-foreground': '210 50% 5%',
        primary: '203 89% 53%',
        'primary-foreground': '210 20% 98%',
        secondary: '210 16.7% 90.2%',
        'secondary-foreground': '203 20% 27.8%',
        muted: '210 16.7% 90.2%',
        'muted-foreground': '203 10% 50%',
        accent: '210 16.7% 90.2%',
        'accent-foreground': '203 20% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '210 13% 91%',
        input: '210 13% 91%',
        ring: '203 89% 53%',
      },
      dark: {
        background: '210 50% 5%',
        foreground: '210 20% 98%',
        card: '210 50% 5%',
        'card-foreground': '210 20% 98%',
        popover: '210 50% 5%',
        'popover-foreground': '210 20% 98%',
        primary: '203 78% 44%',
        'primary-foreground': '210 20% 98%',
        secondary: '203 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '203 40% 20%',
        'muted-foreground': '203 20% 65%',
        accent: '203 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '203 40% 20%',
        input: '203 40% 20%',
        ring: '203 78% 44%',
      },
    },
  },
  {
    name: 'cyan',
    label: 'Cyan',
    activeColor: {
      light: '187 100% 42.5%',
      dark: '187 64% 44%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '190 100% 10%',
        card: '0 0% 100%',
        'card-foreground': '190 100% 10%',
        popover: '0 0% 100%',
        'popover-foreground': '190 100% 10%',
        primary: '187 100% 42.5%',
        'primary-foreground': '210 20% 98%',
        secondary: '190 16.7% 90.2%',
        'secondary-foreground': '190 20% 27.8%',
        muted: '190 16.7% 90.2%',
        'muted-foreground': '190 10% 50%',
        accent: '190 16.7% 90.2%',
        'accent-foreground': '190 20% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '190 13% 91%',
        input: '190 13% 91%',
        ring: '187 100% 42.5%',
      },
      dark: {
        background: '190 100% 10%',
        foreground: '210 20% 98%',
        card: '190 100% 10%',
        'card-foreground': '210 20% 98%',
        popover: '190 100% 10%',
        'popover-foreground': '210 20% 98%',
        primary: '187 64% 44%',
        'primary-foreground': '210 20% 98%',
        secondary: '187 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '187 40% 20%',
        'muted-foreground': '187 20% 65%',
        accent: '187 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '187 40% 20%',
        input: '187 40% 20%',
        ring: '187 64% 44%',
      },
    },
  },
  {
    name: 'teal',
    label: 'Teal',
    activeColor: {
      light: '174 100% 29.5%',
      dark: '174 56% 39%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '170 80% 13.5%',
        card: '0 0% 100%',
        'card-foreground': '170 80% 13.5%',
        popover: '0 0% 100%',
        'popover-foreground': '170 80% 13.5%',
        primary: '174 100% 29.5%',
        'primary-foreground': '210 20% 98%',
        secondary: '180 16.7% 90.2%',
        'secondary-foreground': '174 30% 27.8%',
        muted: '180 16.7% 90.2%',
        'muted-foreground': '174 12% 47%',
        accent: '180 16.7% 90.2%',
        'accent-foreground': '174 30% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '180 13% 91%',
        input: '180 13% 91%',
        ring: '174 100% 29.5%',
      },
      dark: {
        background: '170 80% 13.5%',
        foreground: '210 20% 98%',
        card: '170 80% 13.5%',
        'card-foreground': '210 20% 98%',
        popover: '170 80% 13.5%',
        'popover-foreground': '210 20% 98%',
        primary: '174 56% 39%',
        'primary-foreground': '210 20% 98%',
        secondary: '174 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '174 40% 20%',
        'muted-foreground': '174 20% 65%',
        accent: '174 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '174 40% 20%',
        input: '174 40% 20%',
        ring: '174 56% 39%',
      },
    },
  },
  {
    name: 'emerald',
    label: 'Emerald',
    activeColor: {
      light: '144 61% 49.6%',
      dark: '144 44% 36%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '156 100% 12.7%',
        card: '0 0% 100%',
        'card-foreground': '156 100% 12.7%',
        popover: '0 0% 100%',
        'popover-foreground': '156 100% 12.7%',
        primary: '144 61% 49.6%',
        'primary-foreground': '210 20% 98%',
        secondary: '160 23.3% 88.2%',
        'secondary-foreground': '144 20% 27.8%',
        muted: '160 23.3% 88.2%',
        'muted-foreground': '144 15% 45%',
        accent: '160 23.3% 88.2%',
        'accent-foreground': '144 20% 27.8%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '160 18% 87%',
        input: '160 18% 87%',
        ring: '144 61% 49.6%',
      },
      dark: {
        background: '156 100% 12.7%',
        foreground: '210 20% 98%',
        card: '156 100% 12.7%',
        'card-foreground': '210 20% 98%',
        popover: '156 100% 12.7%',
        'popover-foreground': '210 20% 98%',
        primary: '144 44% 36%',
        'primary-foreground': '210 20% 98%',
        secondary: '144 40% 20%',
        'secondary-foreground': '210 20% 98%',
        muted: '144 40% 20%',
        'muted-foreground': '144 15% 65%',
        accent: '144 40% 20%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '144 40% 20%',
        input: '144 40% 20%',
        ring: '144 44% 36%',
      },
    },
  },
  {
    name: 'lime',
    label: 'Lime',
    activeColor: {
      light: '75 83.3% 57.8%',
      dark: '75 70% 50.4%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '90 71.4% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '90 71.4% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '90 71.4% 4.1%',
        primary: '75 83.3% 57.8%',
        'primary-foreground': '210 20% 98%',
        secondary: '90 14.3% 95.9%',
        'secondary-foreground': '90.9 39.3% 11%',
        muted: '90 14.3% 95.9%',
        'muted-foreground': '90 8.9% 46.1%',
        accent: '90 14.3% 95.9%',
        'accent-foreground': '90.9 39.3% 11%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '90 13% 91%',
        input: '90 13% 91%',
        ring: '75 83.3% 57.8%',
      },
      dark: {
        background: '90 71.4% 4.1%',
        foreground: '210 20% 98%',
        card: '90 71.4% 4.1%',
        'card-foreground': '210 20% 98%',
        popover: '90 71.4% 4.1%',
        'popover-foreground': '210 20% 98%',
        primary: '75 70% 50.4%',
        'primary-foreground': '210 20% 98%',
        secondary: '85 27.9% 16.9%',
        'secondary-foreground': '210 20% 98%',
        muted: '85 27.9% 16.9%',
        'muted-foreground': '87.9 10.6% 64.9%',
        accent: '85 27.9% 16.9%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '85 27.9% 16.9%',
        input: '85 27.9% 16.9%',
        ring: '75 70% 50.4%',
      },
    },
  },
  {
    name: 'amber',
    label: 'Amber',
    activeColor: {
      light: '45 100% 51%',
      dark: '45 100% 50%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '45 100% 6%',
        card: '0 0% 100%',
        'card-foreground': '45 100% 6%',
        popover: '0 0% 100%',
        'popover-foreground': '45 100% 6%',
        primary: '45 100% 51%',
        'primary-foreground': '210 20% 98%',
        secondary: '60 13.8% 90%',
        'secondary-foreground': '45 100% 10%',
        muted: '60 13.8% 90%',
        'muted-foreground': '45 100% 30%',
        accent: '60 13.8% 90%',
        'accent-foreground': '45 100% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '60 13% 91%',
        input: '60 13% 91%',
        ring: '45 100% 51%',
      },
      dark: {
        background: '45 100% 6%',
        foreground: '210 20% 98%',
        card: '45 100% 6%',
        'card-foreground': '210 20% 98%',
        popover: '45 100% 6%',
        'popover-foreground': '210 20% 98%',
        primary: '45 100% 50%',
        'primary-foreground': '210 20% 98%',
        secondary: '45 100% 10%',
        'secondary-foreground': '210 20% 98%',
        muted: '45 100% 10%',
        'muted-foreground': '45 100% 80%',
        accent: '45 100% 10%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '45 100% 10%',
        input: '45 100% 10%',
        ring: '45 100% 50%',
      },
    },
  },
  {
    name: 'zinc',
    label: 'Zinc',
    activeColor: {
      light: '240 5.9% 10%',
      dark: '240 5.2% 33.9%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '240 10% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        primary: '240 5.9% 10%',
        'primary-foreground': '0 0% 98%',
        secondary: '240 4.8% 95.9%',
        'secondary-foreground': '240 5.9% 10%',
        muted: '240 4.8% 95.9%',
        'muted-foreground': '240 3.8% 46.1%',
        accent: '240 4.8% 95.9%',
        'accent-foreground': '240 5.9% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '0 0% 98%',
        border: '240 5.9% 90%',
        input: '240 5.9% 90%',
        ring: '240 5.9% 10%',
        radius: '0.5rem',
      },
      dark: {
        background: '240 10% 3.9%',
        foreground: '0 0% 98%',
        card: '240 10% 3.9%',
        'card-foreground': '0 0% 98%',
        popover: '240 10% 3.9%',
        'popover-foreground': '0 0% 98%',
        primary: '0 0% 98%',
        'primary-foreground': '240 5.9% 10%',
        secondary: '240 3.7% 15.9%',
        'secondary-foreground': '0 0% 98%',
        muted: '240 3.7% 15.9%',
        'muted-foreground': '240 5% 64.9%',
        accent: '240 3.7% 15.9%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '0 0% 98%',
        border: '240 3.7% 15.9%',
        input: '240 3.7% 15.9%',
        ring: '240 4.9% 83.9%',
      },
    },
  },
  {
    name: 'slate',
    label: 'Slate',
    activeColor: {
      light: '215.4 16.3% 46.9%',
      dark: '215.3 19.3% 34.5%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '222.2 84% 4.9%',
        card: '0 0% 100%',
        'card-foreground': '222.2 84% 4.9%',
        popover: '0 0% 100%',
        'popover-foreground': '222.2 84% 4.9%',
        primary: '222.2 47.4% 11.2%',
        'primary-foreground': '210 40% 98%',
        secondary: '210 40% 96.1%',
        'secondary-foreground': '222.2 47.4% 11.2%',
        muted: '210 40% 96.1%',
        'muted-foreground': '215.4 16.3% 46.9%',
        accent: '210 40% 96.1%',
        'accent-foreground': '222.2 47.4% 11.2%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 40% 98%',
        border: '214.3 31.8% 91.4%',
        input: '214.3 31.8% 91.4%',
        ring: '222.2 84% 4.9%',
        radius: '0.5rem',
      },
      dark: {
        background: '222.2 84% 4.9%',
        foreground: '210 40% 98%',
        card: '222.2 84% 4.9%',
        'card-foreground': '210 40% 98%',
        popover: '222.2 84% 4.9%',
        'popover-foreground': '210 40% 98%',
        primary: '210 40% 98%',
        'primary-foreground': '222.2 47.4% 11.2%',
        secondary: '217.2 32.6% 17.5%',
        'secondary-foreground': '210 40% 98%',
        muted: '217.2 32.6% 17.5%',
        'muted-foreground': '215 20.2% 65.1%',
        accent: '217.2 32.6% 17.5%',
        'accent-foreground': '210 40% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 40% 98%',
        border: '217.2 32.6% 17.5%',
        input: '217.2 32.6% 17.5%',
        ring: '212.7 26.8% 83.9',
      },
    },
  },
  {
    name: 'stone',
    label: 'Stone',
    activeColor: {
      light: '25 5.3% 44.7%',
      dark: '33.3 5.5% 32.4%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '20 14.3% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '20 14.3% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '20 14.3% 4.1%',
        primary: '24 9.8% 10%',
        'primary-foreground': '60 9.1% 97.8%',
        secondary: '60 4.8% 95.9%',
        'secondary-foreground': '24 9.8% 10%',
        muted: '60 4.8% 95.9%',
        'muted-foreground': '25 5.3% 44.7%',
        accent: '60 4.8% 95.9%',
        'accent-foreground': '24 9.8% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '20 5.9% 90%',
        input: '20 5.9% 90%',
        ring: '20 14.3% 4.1%',
        radius: '0.95rem',
      },
      dark: {
        background: '20 14.3% 4.1%',
        foreground: '60 9.1% 97.8%',
        card: '20 14.3% 4.1%',
        'card-foreground': '60 9.1% 97.8%',
        popover: '20 14.3% 4.1%',
        'popover-foreground': '60 9.1% 97.8%',
        primary: '60 9.1% 97.8%',
        'primary-foreground': '24 9.8% 10%',
        secondary: '12 6.5% 15.1%',
        'secondary-foreground': '60 9.1% 97.8%',
        muted: '12 6.5% 15.1%',
        'muted-foreground': '24 5.4% 63.9%',
        accent: '12 6.5% 15.1%',
        'accent-foreground': '60 9.1% 97.8%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '12 6.5% 15.1%',
        input: '12 6.5% 15.1%',
        ring: '24 5.7% 82.9%',
      },
    },
  },
  {
    name: 'gray',
    label: 'Gray',
    activeColor: {
      light: '220 8.9% 46.1%',
      dark: '215 13.8% 34.1%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '224 71.4% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '224 71.4% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '224 71.4% 4.1%',
        primary: '220.9 39.3% 11%',
        'primary-foreground': '210 20% 98%',
        secondary: '220 14.3% 95.9%',
        'secondary-foreground': '220.9 39.3% 11%',
        muted: '220 14.3% 95.9%',
        'muted-foreground': '220 8.9% 46.1%',
        accent: '220 14.3% 95.9%',
        'accent-foreground': '220.9 39.3% 11%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '220 13% 91%',
        input: '220 13% 91%',
        ring: '224 71.4% 4.1%',
        radius: '0.35rem',
      },
      dark: {
        background: '224 71.4% 4.1%',
        foreground: '210 20% 98%',
        card: '224 71.4% 4.1%',
        'card-foreground': '210 20% 98%',
        popover: '224 71.4% 4.1%',
        'popover-foreground': '210 20% 98%',
        primary: '210 20% 98%',
        'primary-foreground': '220.9 39.3% 11%',
        secondary: '215 27.9% 16.9%',
        'secondary-foreground': '210 20% 98%',
        muted: '215 27.9% 16.9%',
        'muted-foreground': '217.9 10.6% 64.9%',
        accent: '215 27.9% 16.9%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '215 27.9% 16.9%',
        input: '215 27.9% 16.9%',
        ring: '216 12.2% 83.9%',
      },
    },
  },
  {
    name: 'neutral',
    label: 'Neutral',
    activeColor: {
      light: '0 0% 45.1%',
      dark: '0 0% 32.2%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '0 0% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '0 0% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '0 0% 3.9%',
        primary: '0 0% 9%',
        'primary-foreground': '0 0% 98%',
        secondary: '0 0% 96.1%',
        'secondary-foreground': '0 0% 9%',
        muted: '0 0% 96.1%',
        'muted-foreground': '0 0% 45.1%',
        accent: '0 0% 96.1%',
        'accent-foreground': '0 0% 9%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '0 0% 98%',
        border: '0 0% 89.8%',
        input: '0 0% 89.8%',
        ring: '0 0% 3.9%',
      },
      dark: {
        background: '0 0% 3.9%',
        foreground: '0 0% 98%',
        card: '0 0% 3.9%',
        'card-foreground': '0 0% 98%',
        popover: '0 0% 3.9%',
        'popover-foreground': '0 0% 98%',
        primary: '0 0% 98%',
        'primary-foreground': '0 0% 9%',
        secondary: '0 0% 14.9%',
        'secondary-foreground': '0 0% 98%',
        muted: '0 0% 14.9%',
        'muted-foreground': '0 0% 63.9%',
        accent: '0 0% 14.9%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '0 0% 98%',
        border: '0 0% 14.9%',
        input: '0 0% 14.9%',
        ring: '0 0% 83.1%',
      },
    },
  },
  {
    name: 'red',
    label: 'Red',
    activeColor: {
      light: '0 72.2% 50.6%',
      dark: '0 72.2% 50.6%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '0 0% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '0 0% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '0 0% 3.9%',
        primary: '0 72.2% 50.6%',
        'primary-foreground': '0 85.7% 97.3%',
        secondary: '0 0% 96.1%',
        'secondary-foreground': '0 0% 9%',
        muted: '0 0% 96.1%',
        'muted-foreground': '0 0% 45.1%',
        accent: '0 0% 96.1%',
        'accent-foreground': '0 0% 9%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '0 0% 98%',
        border: '0 0% 89.8%',
        input: '0 0% 89.8%',
        ring: '0 72.2% 50.6%',
        radius: '0.4rem',
      },
      dark: {
        background: '0 0% 3.9%',
        foreground: '0 0% 98%',
        card: '0 0% 3.9%',
        'card-foreground': '0 0% 98%',
        popover: '0 0% 3.9%',
        'popover-foreground': '0 0% 98%',
        primary: '0 72.2% 50.6%',
        'primary-foreground': '0 85.7% 97.3%',
        secondary: '0 0% 14.9%',
        'secondary-foreground': '0 0% 98%',
        muted: '0 0% 14.9%',
        'muted-foreground': '0 0% 63.9%',
        accent: '0 0% 14.9%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '0 0% 98%',
        border: '0 0% 14.9%',
        input: '0 0% 14.9%',
        ring: '0 72.2% 50.6%',
      },
    },
  },
  {
    name: 'rose',
    label: 'Rose',
    activeColor: {
      light: '346.8 77.2% 49.8%',
      dark: '346.8 77.2% 49.8%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '240 10% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        primary: '346.8 77.2% 49.8%',
        'primary-foreground': '355.7 100% 97.3%',
        secondary: '240 4.8% 95.9%',
        'secondary-foreground': '240 5.9% 10%',
        muted: '240 4.8% 95.9%',
        'muted-foreground': '240 3.8% 46.1%',
        accent: '240 4.8% 95.9%',
        'accent-foreground': '240 5.9% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '0 0% 98%',
        border: '240 5.9% 90%',
        input: '240 5.9% 90%',
        ring: '346.8 77.2% 49.8%',
        radius: '0.5rem',
      },
      dark: {
        background: '20 14.3% 4.1%',
        foreground: '0 0% 95%',
        popover: '0 0% 9%',
        'popover-foreground': '0 0% 95%',
        card: '24 9.8% 10%',
        'card-foreground': '0 0% 95%',
        primary: '346.8 77.2% 49.8%',
        'primary-foreground': '355.7 100% 97.3%',
        secondary: '240 3.7% 15.9%',
        'secondary-foreground': '0 0% 98%',
        muted: '0 0% 15%',
        'muted-foreground': '240 5% 64.9%',
        accent: '12 6.5% 15.1%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '0 85.7% 97.3%',
        border: '240 3.7% 15.9%',
        input: '240 3.7% 15.9%',
        ring: '346.8 77.2% 49.8%',
      },
    },
  },
  {
    name: 'orange',
    label: 'Orange',
    activeColor: {
      light: '24.6 95% 53.1%',
      dark: '20.5 90.2% 48.2%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '20 14.3% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '20 14.3% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '20 14.3% 4.1%',
        primary: '24.6 95% 53.1%',
        'primary-foreground': '60 9.1% 97.8%',
        secondary: '60 4.8% 95.9%',
        'secondary-foreground': '24 9.8% 10%',
        muted: '60 4.8% 95.9%',
        'muted-foreground': '25 5.3% 44.7%',
        accent: '60 4.8% 95.9%',
        'accent-foreground': '24 9.8% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '20 5.9% 90%',
        input: '20 5.9% 90%',
        ring: '24.6 95% 53.1%',
        radius: '0.95rem',
      },
      dark: {
        background: '20 14.3% 4.1%',
        foreground: '60 9.1% 97.8%',
        card: '20 14.3% 4.1%',
        'card-foreground': '60 9.1% 97.8%',
        popover: '20 14.3% 4.1%',
        'popover-foreground': '60 9.1% 97.8%',
        primary: '20.5 90.2% 48.2%',
        'primary-foreground': '60 9.1% 97.8%',
        secondary: '12 6.5% 15.1%',
        'secondary-foreground': '60 9.1% 97.8%',
        muted: '12 6.5% 15.1%',
        'muted-foreground': '24 5.4% 63.9%',
        accent: '12 6.5% 15.1%',
        'accent-foreground': '60 9.1% 97.8%',
        destructive: '0 72.2% 50.6%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '12 6.5% 15.1%',
        input: '12 6.5% 15.1%',
        ring: '20.5 90.2% 48.2%',
      },
    },
  },
  {
    name: 'green',
    label: 'Green',
    activeColor: {
      light: '142.1 76.2% 36.3%',
      dark: '142.1 70.6% 45.3%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '240 10% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        primary: '142.1 76.2% 36.3%',
        'primary-foreground': '355.7 100% 97.3%',
        secondary: '240 4.8% 95.9%',
        'secondary-foreground': '240 5.9% 10%',
        muted: '240 4.8% 95.9%',
        'muted-foreground': '240 3.8% 46.1%',
        accent: '240 4.8% 95.9%',
        'accent-foreground': '240 5.9% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '0 0% 98%',
        border: '240 5.9% 90%',
        input: '240 5.9% 90%',
        ring: '142.1 76.2% 36.3%',
      },
      dark: {
        background: '20 14.3% 4.1%',
        foreground: '0 0% 95%',
        popover: '0 0% 9%',
        'popover-foreground': '0 0% 95%',
        card: '24 9.8% 10%',
        'card-foreground': '0 0% 95%',
        primary: '142.1 70.6% 45.3%',
        'primary-foreground': '144.9 80.4% 10%',
        secondary: '240 3.7% 15.9%',
        'secondary-foreground': '0 0% 98%',
        muted: '0 0% 15%',
        'muted-foreground': '240 5% 64.9%',
        accent: '12 6.5% 15.1%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '0 85.7% 97.3%',
        border: '240 3.7% 15.9%',
        input: '240 3.7% 15.9%',
        ring: '142.4 71.8% 29.2%',
      },
    },
  },
  {
    name: 'blue',
    label: 'Blue',
    activeColor: {
      light: '221.2 83.2% 53.3%',
      dark: '217.2 91.2% 59.8%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '222.2 84% 4.9%',
        card: '0 0% 100%',
        'card-foreground': '222.2 84% 4.9%',
        popover: '0 0% 100%',
        'popover-foreground': '222.2 84% 4.9%',
        primary: '221.2 83.2% 53.3%',
        'primary-foreground': '210 40% 98%',
        secondary: '210 40% 96.1%',
        'secondary-foreground': '222.2 47.4% 11.2%',
        muted: '210 40% 96.1%',
        'muted-foreground': '215.4 16.3% 46.9%',
        accent: '210 40% 96.1%',
        'accent-foreground': '222.2 47.4% 11.2%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 40% 98%',
        border: '214.3 31.8% 91.4%',
        input: '214.3 31.8% 91.4%',
        ring: '221.2 83.2% 53.3%',
      },
      dark: {
        background: '222.2 84% 4.9%',
        foreground: '210 40% 98%',
        card: '222.2 84% 4.9%',
        'card-foreground': '210 40% 98%',
        popover: '222.2 84% 4.9%',
        'popover-foreground': '210 40% 98%',
        primary: '217.2 91.2% 59.8%',
        'primary-foreground': '222.2 47.4% 11.2%',
        secondary: '217.2 32.6% 17.5%',
        'secondary-foreground': '210 40% 98%',
        muted: '217.2 32.6% 17.5%',
        'muted-foreground': '215 20.2% 65.1%',
        accent: '217.2 32.6% 17.5%',
        'accent-foreground': '210 40% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 40% 98%',
        border: '217.2 32.6% 17.5%',
        input: '217.2 32.6% 17.5%',
        ring: '224.3 76.3% 48%',
      },
    },
  },
  {
    name: 'yellow',
    label: 'Yellow',
    activeColor: {
      light: '47.9 95.8% 53.1%',
      dark: '47.9 95.8% 53.1%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '20 14.3% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '20 14.3% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '20 14.3% 4.1%',
        primary: '47.9 95.8% 53.1%',
        'primary-foreground': '26 83.3% 14.1%',
        secondary: '60 4.8% 95.9%',
        'secondary-foreground': '24 9.8% 10%',
        muted: '60 4.8% 95.9%',
        'muted-foreground': '25 5.3% 44.7%',
        accent: '60 4.8% 95.9%',
        'accent-foreground': '24 9.8% 10%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '20 5.9% 90%',
        input: '20 5.9% 90%',
        ring: '20 14.3% 4.1%',
        radius: '0.95rem',
      },
      dark: {
        background: '20 14.3% 4.1%',
        foreground: '60 9.1% 97.8%',
        card: '20 14.3% 4.1%',
        'card-foreground': '60 9.1% 97.8%',
        popover: '20 14.3% 4.1%',
        'popover-foreground': '60 9.1% 97.8%',
        primary: '47.9 95.8% 53.1%',
        'primary-foreground': '26 83.3% 14.1%',
        secondary: '12 6.5% 15.1%',
        'secondary-foreground': '60 9.1% 97.8%',
        muted: '12 6.5% 15.1%',
        'muted-foreground': '24 5.4% 63.9%',
        accent: '12 6.5% 15.1%',
        'accent-foreground': '60 9.1% 97.8%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '60 9.1% 97.8%',
        border: '12 6.5% 15.1%',
        input: '12 6.5% 15.1%',
        ring: '35.5 91.7% 32.9%',
      },
    },
  },
  {
    name: 'violet',
    label: 'Violet',
    activeColor: {
      light: '262.1 83.3% 57.8%',
      dark: '263.4 70% 50.4%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '224 71.4% 4.1%',
        card: '0 0% 100%',
        'card-foreground': '224 71.4% 4.1%',
        popover: '0 0% 100%',
        'popover-foreground': '224 71.4% 4.1%',
        primary: '262.1 83.3% 57.8%',
        'primary-foreground': '210 20% 98%',
        secondary: '220 14.3% 95.9%',
        'secondary-foreground': '220.9 39.3% 11%',
        muted: '220 14.3% 95.9%',
        'muted-foreground': '220 8.9% 46.1%',
        accent: '220 14.3% 95.9%',
        'accent-foreground': '220.9 39.3% 11%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 20% 98%',
        border: '220 13% 91%',
        input: '220 13% 91%',
        ring: '262.1 83.3% 57.8%',
      },
      dark: {
        background: '224 71.4% 4.1%',
        foreground: '210 20% 98%',
        card: '224 71.4% 4.1%',
        'card-foreground': '210 20% 98%',
        popover: '224 71.4% 4.1%',
        'popover-foreground': '210 20% 98%',
        primary: '263.4 70% 50.4%',
        'primary-foreground': '210 20% 98%',
        secondary: '215 27.9% 16.9%',
        'secondary-foreground': '210 20% 98%',
        muted: '215 27.9% 16.9%',
        'muted-foreground': '217.9 10.6% 64.9%',
        accent: '215 27.9% 16.9%',
        'accent-foreground': '210 20% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 20% 98%',
        border: '215 27.9% 16.9%',
        input: '215 27.9% 16.9%',
        ring: '263.4 70% 50.4%',
      },
    },
  },
]

const sortByColorOrder = (a: Color, b: Color) => {
  const indexA = colorOrder.indexOf(a.label)
  const indexB = colorOrder.indexOf(b.label)
  return indexA - indexB
}

export const themes = colors.sort(sortByColorOrder)

export type Theme = (typeof themes)[number]
