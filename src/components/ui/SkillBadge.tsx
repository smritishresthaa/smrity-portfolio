import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  PenTool,
  Layers,
  Code2,
  Database,
  Server,
  Braces,
  Github,
  Wind,
  Figma,
  FileCode2,
  Workflow,
  Users,
  Globe2,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Boxes,
} from 'lucide-react';
import { SkillBadgeProps } from '../../types';

const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  showLevel = true,
  variant = 'default',
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-mint-100 text-mint-800 border-mint-200 dark:bg-mint-900/20 dark:text-mint-200 dark:border-mint-700';
      case 'advanced':
        return 'bg-primary-100 text-primary-800 border-primary-200 dark:bg-primary-900/20 dark:text-primary-200 dark:border-primary-700';
      case 'intermediate':
        return 'bg-secondary-100 text-secondary-800 border-secondary-200 dark:bg-secondary-900/20 dark:text-secondary-200 dark:border-secondary-700';
      case 'beginner':
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-200 dark:border-gray-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-200 dark:border-gray-700';
    }
  };

  const getSkillIcon = (name: string, category: string) => {
    const skillName = name.toLowerCase();

    if (skillName.includes('figma')) return Figma;
    if (skillName.includes('ui') || skillName.includes('ux')) return Palette;
    if (skillName.includes('wireframing')) return PenTool;
    if (skillName.includes('prototype')) return Workflow;
    if (skillName.includes('react')) return Code2;
    if (skillName.includes('node')) return Server;
    if (skillName.includes('mongo')) return Database;
    if (skillName.includes('tailwind')) return Wind;
    if (skillName.includes('html') || skillName.includes('css')) return FileCode2;
    if (skillName.includes('git')) return Github;
    if (skillName.includes('mern')) return Boxes;
    if (skillName.includes('python')) return Code2;
    if (skillName.includes('java')) return FileCode2;

    switch (category) {
      case 'design':
        return Layers;
      case 'development':
        return Braces;
      case 'tools':
        return Workflow;
      case 'soft':
        return Users;
      case 'language':
        return Globe2;
      default:
        return Lightbulb;
    }
  };

  const getLevelIndicator = (level: string) => {
    const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
    const currentLevel = levels.indexOf(level) + 1;

    return (
      <div className="flex space-x-1 ml-2">
        {[1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            className={`w-1.5 h-1.5 rounded-full ${
              dot <= currentLevel ? 'bg-current' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const Icon = getSkillIcon(skill.name, skill.category);

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border min-h-[2.5rem] shadow-sm hover:shadow-md transition-all duration-200 ${getLevelColor(skill.level)}`}
      >
        <Icon size={16} strokeWidth={2.2} />
        <span>{skill.name}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3 }}
      className={`p-3 sm:p-4 rounded-lg border-2 min-h-[5rem] sm:min-h-[6rem] ${getLevelColor(skill.level)} hover:shadow-md transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon size={18} strokeWidth={2.2} />
          <h3 className="font-semibold opacity-75 dark:text-white text-sm sm:text-base leading-tight">
            {skill.name}
          </h3>
        </div>

        {showLevel && (
          <span className="text-xs font-medium uppercase tracking-wider opacity-75 hidden sm:inline">
            {skill.level}
          </span>
        )}
      </div>

      {showLevel && (
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-75 capitalize">
            {skill.category} skill
          </span>
          {getLevelIndicator(skill.level)}
        </div>
      )}
    </motion.div>
  );
};

export default SkillBadge;