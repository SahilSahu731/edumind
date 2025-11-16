export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ');
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

type ColorType = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'gray';

export const getColorClasses = (color: string): string => {
  const colors: Record<ColorType, string> = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    orange: 'bg-orange-500 text-white',
    purple: 'bg-purple-500 text-white',
    red: 'bg-red-500 text-white',
    gray: 'bg-gray-500 text-white'
  };
  return colors[color as ColorType] || colors.gray;
};

export const getIconColorClasses = (color: string): string => {
  const colors: Record<ColorType, string> = {
    blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    green: 'text-green-500 bg-green-50 dark:bg-green-900/20',
    orange: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
    purple: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    red: 'text-red-500 bg-red-50 dark:bg-red-900/20',
    gray: 'text-gray-500 bg-gray-50 dark:bg-gray-900/20'
  };
  return colors[color as ColorType] || colors.gray;
};