"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { getAnimatedIconPath } from '@/lib/utils';

interface AnimatedIconProps {
  category: 'laundry' | 'delivery';
  icon: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function AnimatedIcon({ 
  category, 
  icon, 
  className, 
  alt = `${category} ${icon} icon`,
  width = 64,
  height = 64
}: AnimatedIconProps) {
  const iconPath = getAnimatedIconPath(category, icon);

  if (!iconPath) {
    console.warn(`Animated icon not found: ${category}.${icon}`);
    return null;
  }

  return (
    <img
      src={iconPath}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "object-contain",
        className
      )}
      loading="lazy"
    />
  );
}

// Predefined icon components for common use cases
export function WashingMachineIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="washing-machine" className={className} {...props} />;
}

export function ClothesPackingIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="clothes-packing" className={className} {...props} />;
}

export function IroningIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="ironing" className={className} {...props} />;
}

export function DetergentIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="detergent" className={className} {...props} />;
}

export function TshirtDryingIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="tshirt-drying" className={className} {...props} />;
}

export function PileOfTowelsIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="laundry" icon="pile-of-towels" className={className} {...props} />;
}

export function DeliveryTruckIcon({ className, ...props }: Omit<AnimatedIconProps, 'category' | 'icon'>) {
  return <AnimatedIcon category="delivery" icon="truck" className={className} {...props} />;
}
