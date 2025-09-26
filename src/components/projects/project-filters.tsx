/*eslint no-unused-vars: "off"*/

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  getAllCategoriesFromProjects,
  getAllTechnologiesFromProjects,
  getCategoryDisplayName
} from '@/lib/utils';
import { type Project } from '@/schema';
import { ArrowUpDown, Check, Filter, Search, X } from 'lucide-react';
import React, { useState } from 'react';

interface ProjectFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTechnologies: string[];
  setSelectedTechnologies: (technologies: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  allProjects: Project[];
}

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  selectedTechnologies,
  setSelectedTechnologies,
  sortBy,
  setSortBy,
  allProjects
}: ProjectFiltersProps) {
  const [techFilterOpen, setTechFilterOpen] = useState(false);
  const [sortFilterOpen, setSortFilterOpen] = useState(false);
  const { categorizedTechnologies } = getAllTechnologiesFromProjects(allProjects);
  const projectCategories = getAllCategoriesFromProjects(allProjects);

  const toggleTechnology = (tech: string) => {
    console.log('Toggling technology:', tech);
    console.log('Current selected:', selectedTechnologies);

    const newSelected = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter((t) => t !== tech)
      : [...selectedTechnologies, tech];

    console.log('New selected:', newSelected);
    setSelectedTechnologies(newSelected);
  };

  const clearTechnologyFilters = () => {
    setSelectedTechnologies([]);
  };

  const categoryDisplayNames: { [key: string]: string } = {
    frontend: 'Frontend',
    backend: 'Backend',
    ai: 'AI & ML',
    machineLearning: 'Machine Learning',
    framework: 'Frameworks',
    database: 'Databases',
    computing: 'Computing',
    simulation: 'Simulation',
    visualization: 'Visualization',
    cicd: 'CI/CD',
    development: 'Development Tools',
    profiling: 'Profiling',
    modeling: 'Modeling',
    bioinformatics: 'Bioinformatics',
    science: 'Scientific Computing',
    dataStructures: 'Data Structures',
    distribution: 'Distribution',
    optimization: 'Optimization',
    other: 'Other'
  };

  return (
    <div className="mb-10">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <FilterButton
          filter="all"
          activeFilter={activeFilter}
          onClick={() => setActiveFilter('all')}>
          All Projects
        </FilterButton>
        <FilterButton
          filter="featured"
          activeFilter={activeFilter}
          onClick={() => setActiveFilter('featured')}>
          Featured
        </FilterButton>
        {projectCategories.map((category) => (
          <FilterButton
            key={category}
            filter={category}
            activeFilter={activeFilter}
            onClick={() => setActiveFilter(category)}>
            {getCategoryDisplayName(category)}
          </FilterButton>
        ))}
      </div>

      {/* Search and Filter Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            id="project-search"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-4 pr-10 rounded-lg border focus:ring-[#B3A369]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Sort Dropdown */}
        <Popover open={sortFilterOpen} onOpenChange={setSortFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto min-w-[160px] justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                <span>
                  {sortBy === 'newest'
                    ? 'Newest First'
                    : sortBy === 'oldest'
                      ? 'Oldest First'
                      : sortBy === 'alphabetical'
                        ? 'A-Z'
                        : sortBy === 'category'
                          ? 'By Category'
                          : 'Sort By'}
                </span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[180px] p-2" align="start">
            <div className="space-y-1">
              {[
                { value: 'newest', label: 'Newest First' },
                { value: 'oldest', label: 'Oldest First' },
                { value: 'alphabetical', label: 'A-Z' },
                { value: 'category', label: 'By Category' }
              ].map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50 ${sortBy === option.value ? 'bg-gray-100' : ''}`}
                  onClick={() => {
                    setSortBy(option.value);
                    setSortFilterOpen(false);
                  }}>
                  <div className="w-4 h-4 flex items-center justify-center">
                    {sortBy === option.value && <Check className="h-4 w-4 text-[#003057]" />}
                  </div>
                  <span className="text-sm">{option.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Technology Filter Dropdown */}
        <Popover open={techFilterOpen} onOpenChange={setTechFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto min-w-[200px] justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>
                  {selectedTechnologies.length === 0
                    ? 'Filter by Technology'
                    : `${selectedTechnologies.length} selected`}
                </span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-4" align="start">
            <div className="max-h-[300px] overflow-y-auto">
              <div className="mb-3">
                <Input placeholder="Search technologies..." className="w-full" />
              </div>

              {Object.entries(categorizedTechnologies).map(([category, techs]) => (
                <div key={category} className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    {categoryDisplayNames[category] || category}
                  </h4>
                  <div className="space-y-1">
                    {techs.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Clicking tech:', tech);
                          toggleTechnology(tech);
                        }}>
                        <div className="w-4 h-4 flex items-center justify-center">
                          {selectedTechnologies.includes(tech) && (
                            <Check className="h-4 w-4 text-[#003057]" />
                          )}
                        </div>
                        <span className="flex-1 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Selected Technology Tags */}
      {selectedTechnologies.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {selectedTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-[#003057] text-white hover:bg-[#003057]/90 cursor-pointer"
              onClick={() => toggleTechnology(tech)}>
              {tech}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearTechnologyFilters}
            className="text-gray-600 hover:text-gray-800">
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}

interface FilterButtonProps {
  filter: string;
  activeFilter: string;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ filter, activeFilter, onClick, children }: FilterButtonProps) {
  const isActive = filter === activeFilter;

  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      className={`rounded-full ${isActive
        ? 'bg-[#B3A369] text-white hover:bg-[#E5D6A2] hover:text-[#003057]'
        : 'border-[#B3A369] text-[#003057] hover:bg-[#B3A369] hover:text-white'}`}
      onClick={onClick}>
      {children}
    </Button>
  );
}
