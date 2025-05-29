"use client"

import { useState, useEffect } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { benchmarkData, modelCategories, modelDetails } from '@/data/benchmark-data'

export default function BenchmarksPage() {
  // State for selected models and benchmarks
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [selectedMetric, setSelectedMetric] = useState('inferenceTime')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [comparisonData, setComparisonData] = useState<{ name: string; [key: string]: number | string | undefined | object }[]>([])
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)

  // Filtered data based on selection
  const filteredModels = selectedCategory === 'all' 
    ? Object.keys(modelDetails)
    : Object.keys(modelDetails).filter(model => 
        modelDetails[model].category === selectedCategory
      )

  // Update comparison data when selections change
  useEffect(() => {
    // Simulate data fetching delay
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      const newComparisonData = selectedModels.map(modelId => {
        const modelData = benchmarkData.find(item => item.modelId === modelId)
        return {
          name: modelDetails[modelId]?.name || modelId,
          [selectedMetric]: modelData?.[selectedMetric] || 0,
          fullData: modelData
        }
      })
      
      setComparisonData(newComparisonData)
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [selectedModels, selectedMetric])

  // Toggle model selection
  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId)
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    )
  }

  // Format metric value based on type
  const formatMetricValue = (value: number, metric: string) => {
    switch(metric) {
      case 'inferenceTime':
        return `${value.toFixed(2)}ms`
      case 'accuracy':
        return `${(value * 100).toFixed(2)}%`
      case 'memoryUsage':
        return `${value}MB`
      default:
        return value.toString()
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 font-jetbrains">
              Benchmarking AI at the Speed of Thought
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 font-jetbrains">
              Compare performance metrics, inference times, and accuracy across leading AI models.
              Make data-driven decisions with our comprehensive benchmarking tools.
            </p>
            <Button 
              onClick={() => setActiveTab('comparison')}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Explore Benchmarks
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="comparison">Model Comparison</TabsTrigger>
            <TabsTrigger value="details">Detailed Metrics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">AI Benchmarks Overview</CardTitle>
                <CardDescription>
                  Understand how different AI models perform across key metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        Processing Speed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Measures how quickly models can process and generate responses.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Accuracy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Evaluates how precise and correct model outputs are across various tasks.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-500"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path><path d="m13 12-3 5h4l-3 5"></path></svg>
                        Memory Usage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tracks computational resources required for model operation.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="h-[400px] mb-8">
                  <h3 className="text-lg font-medium mb-4">Top Models by Performance</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={benchmarkData.slice(0, 5)}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="modelName" type="category" width={150} />
                      <Tooltip 
                        formatter={(value, name) => [formatMetricValue(Number(value), name as string), name]}
                      />
                      <Legend />
                      <Bar dataKey="inferenceTime" name="Inference Time (ms)" fill="#8884d8" />
                      <Bar dataKey="accuracy" name="Accuracy" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Model Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={modelCategories}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="category" />
                          <PolarRadiusAxis />
                          <Radar
                            name="Model Count"
                            dataKey="count"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Inference Speed Improvements</span>
                          <Badge className="bg-green-500">↑ 27% YoY</Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Accuracy Gains</span>
                          <Badge className="bg-blue-500">↑ 14% YoY</Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '56%' }}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Memory Efficiency</span>
                          <Badge className="bg-orange-500">↑ 18% YoY</Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Model Selection</CardTitle>
                    <CardDescription>
                      Choose models to compare
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Category Filter</label>
                        <Select
                          value={selectedCategory}
                          onValueChange={setSelectedCategory}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="llm">Language Models</SelectItem>
                            <SelectItem value="vision">Vision Models</SelectItem>
                            <SelectItem value="multimodal">Multimodal Models</SelectItem>
                            <SelectItem value="audio">Audio Models</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Benchmark Metric</label>
                        <Select
                          value={selectedMetric}
                          onValueChange={setSelectedMetric}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select metric" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inferenceTime">Inference Time</SelectItem>
                            <SelectItem value="accuracy">Accuracy</SelectItem>
                            <SelectItem value="memoryUsage">Memory Usage</SelectItem>
                            <SelectItem value="trainingTime">Training Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Available Models</label>
                        <div className="grid grid-cols-1 gap-2">
                          {filteredModels.map(modelId => (
                            <div key={modelId} className="flex items-center space-x-2">
                              <Checkbox 
                                id={modelId} 
                                checked={selectedModels.includes(modelId)}
                                onCheckedChange={() => toggleModelSelection(modelId)}
                              />
                              <label
                                htmlFor={modelId}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {modelDetails[modelId]?.name || modelId}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Benchmark Comparison
                      <TooltipProvider>
                        <TooltipUI>
                          <TooltipTrigger asChild>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-gray-400 cursor-help">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                              <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Compare selected models based on the chosen metric.</p>
                            <p className="text-xs mt-1">Lower values are better for inference time and memory usage. Higher values are better for accuracy.</p>
                          </TooltipContent>
                        </TooltipUI>
                      </TooltipProvider>
                    </CardTitle>
                    <CardDescription>
                      {selectedModels.length === 0 
                        ? "Select models from the left panel to start comparison" 
                        : `Comparing ${selectedModels.length} models`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="flex justify-center items-center h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                      </div>
                    ) : selectedModels.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-gray-400">
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          <path d="M19 17.5c-1.1-0.1-2.2-0.5-3-1.2-0.8-0.6-1.4-1.4-2-2.3"></path>
                        </svg>
                        <h3 className="text-lg font-medium mb-2">No Models Selected</h3>
                        <p className="text-muted-foreground">Choose models from the left panel to see comparison data</p>
                      </div>
                    ) : (
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={comparisonData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              formatter={(value) => [
                                formatMetricValue(Number(value), selectedMetric),
                                selectedMetric === 'inferenceTime' 
                                  ? 'Inference Time' 
                                  : selectedMetric === 'accuracy' 
                                  ? 'Accuracy' 
                                  : 'Memory Usage'
                              ]}
                            />
                            <Legend />
                            <Bar 
                              dataKey={selectedMetric} 
                              name={
                                selectedMetric === 'inferenceTime' 
                                  ? 'Inference Time (ms)' 
                                  : selectedMetric === 'accuracy' 
                                  ? 'Accuracy (%)' 
                                  : 'Memory Usage (MB)'
                              } 
                              fill={
                                selectedMetric === 'inferenceTime' 
                                  ? '#8884d8' 
                                  : selectedMetric === 'accuracy' 
                                  ? '#82ca9d' 
                                  : '#ffc658'
                              } 
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {selectedModels.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {selectedModels.map(modelId => {
                      const modelData = benchmarkData.find(item => item.modelId === modelId)
                      const details = modelDetails[modelId]
                      
                      return (
                        <Card key={modelId} className="overflow-hidden">
                          <CardHeader className="bg-gray-50 dark:bg-gray-800/50 pb-2">
                            <CardTitle className="text-lg flex items-center justify-between">
                              <span>{details?.name || modelId}</span>
                              <Badge variant="outline">{details?.category}</Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Inference Time:</span>
                                <span className="font-medium">{formatMetricValue(modelData?.inferenceTime || 0, 'inferenceTime')}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Accuracy:</span>
                                <span className="font-medium">{formatMetricValue(modelData?.accuracy || 0, 'accuracy')}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Memory Usage:</span>
                                <span className="font-medium">{formatMetricValue(modelData?.memoryUsage || 0, 'memoryUsage')}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Detailed Metrics Tab */}
          <TabsContent value="details" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Performance Metrics</CardTitle>
                <CardDescription>
                  In-depth analysis of model performance across different dimensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border p-2 text-left">Model</th>
                        <th className="border p-2 text-left">Category</th>
                        <th className="border p-2 text-left">Inference Time</th>
                        <th className="border p-2 text-left">Accuracy</th>
                        <th className="border p-2 text-left">Memory Usage</th>
                        <th className="border p-2 text-left">Training Time</th>
                        <th className="border p-2 text-left">Parameters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benchmarkData.map((model, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                          <td className="border p-2">{model.modelName}</td>
                          <td className="border p-2">{modelDetails[model.modelId]?.category || 'Unknown'}</td>
                          <td className="border p-2">{formatMetricValue(model.inferenceTime, 'inferenceTime')}</td>
                          <td className="border p-2">{formatMetricValue(model.accuracy, 'accuracy')}</td>
                          <td className="border p-2">{formatMetricValue(model.memoryUsage, 'memoryUsage')}</td>
                          <td className="border p-2">{model.trainingTime}h</td>
                          <td className="border p-2">{model.parameters}M</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Methodology</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Our benchmarks are conducted in controlled environments using standardized hardware configurations.
                        Each model is tested across multiple runs to ensure consistent results. We measure:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Inference time on NVIDIA A100 GPUs</li>
                        <li>Accuracy using standard test datasets</li>
                        <li>Memory usage during peak operation</li>
                        <li>Training time on identical hardware</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Benchmark Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                          <div>
                            <p className="text-sm font-medium">April 2023 Update</p>
                            <p className="text-xs text-muted-foreground">Added 15 new models including latest transformers</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                          <div>
                            <p className="text-sm font-medium">January 2023 Update</p>
                            <p className="text-xs text-muted-foreground">Revised methodology for more accurate measurements</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                          <div>
                            <p className="text-sm font-medium">October 2022 Update</p>
                            <p className="text-xs text-muted-foreground">Added multimodal model comparisons</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
