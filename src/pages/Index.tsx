import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const sneakers = [
  {
    id: 1,
    name: 'Geobasket',
    year: '2010',
    description: 'Культовые высокие кроссовки с резким геометрическим силуэтом. Массивная подошва и драматичный профиль стали символом бренда.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    tags: ['Iconic', 'High-top', 'Geometric']
  },
  {
    id: 2,
    name: 'Ramones',
    year: '2013',
    description: 'Минималистичные низкие кроссовки, названные в честь панк-группы. Чистые линии и массивная подошва с молнией сбоку.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    tags: ['Minimalist', 'Low-top', 'Punk']
  },
  {
    id: 3,
    name: 'DRKSHDW Abstract',
    year: '2018',
    description: 'Экспериментальная коллекция с преувеличенными пропорциями и футуристическими формами. Настоящий авангард в мире обуви.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    tags: ['Avant-garde', 'Experimental', 'DRKSHDW']
  }
];

const timeline = [
  { year: '1994', event: 'Рик Оуэнс основал свой бренд в Лос-Анджелесе' },
  { year: '2001', event: 'Первый показ на Неделе моды в Нью-Йорке' },
  { year: '2003', event: 'Переезд в Париж, участие в Paris Fashion Week' },
  { year: '2007', event: 'Открытие первого флагманского магазина' },
  { year: '2010', event: 'Запуск линии кроссовок с Geobasket' },
  { year: '2013', event: 'Появление легендарных Ramones' },
  { year: '2014', event: 'Создание линии DRKSHDW' },
  { year: '2018', event: 'Экспериментальные коллекции с необычными формами' }
];

const Index = () => {
  const [selectedSneaker, setSelectedSneaker] = useState(sneakers[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <header className="relative z-10 container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-between mb-16 md:mb-24">
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter animate-fade-in">
              RICK OWENS
            </h1>
            <Badge variant="outline" className="text-xs md:text-sm px-3 py-1 animate-fade-in">
              EST. 1994
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl md:text-7xl font-black leading-none">
                DARK<br />AVANT-GARDE<br />LEGACY
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Культовый дизайнер, который изменил представление о моде через готическую эстетику и экспериментальные формы
              </p>
            </div>
            
            <div className="relative aspect-square animate-scale-in">
              <img 
                src={selectedSneaker.image}
                alt={selectedSneaker.name}
                className="w-full h-full object-cover rounded-sm transition-all duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold mb-1">{selectedSneaker.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedSneaker.year}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4">ИСТОРИЯ</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              От подпольного дизайнера до иконы мировой моды
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 animate-slide-up">
            {timeline.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-primary/30 group-hover:text-primary/60 transition-colors">
                    {item.year}
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-1">
                    {item.event}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4">КОЛЛЕКЦИИ</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Знаковые модели, которые изменили представление об обуви
            </p>
          </div>

          <Tabs defaultValue="all" className="animate-fade-in">
            <TabsList className="mb-8 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="all">Все модели</TabsTrigger>
              <TabsTrigger value="iconic">Культовые</TabsTrigger>
              <TabsTrigger value="experimental">Эксперименты</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {sneakers.map((sneaker, index) => (
                <Card 
                  key={sneaker.id}
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 group cursor-pointer"
                  onClick={() => setSelectedSneaker(sneaker)}
                >
                  <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-[2fr,3fr]' : 'md:grid-cols-[3fr,2fr]'} gap-0`}>
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} aspect-square relative overflow-hidden`}>
                      <img 
                        src={sneaker.image}
                        alt={sneaker.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} p-8 md:p-12 flex flex-col justify-center`}>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {sneaker.year}
                        </Badge>
                        {sneaker.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        {sneaker.name}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {sneaker.description}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                        <span className="text-sm font-bold">ПОДРОБНЕЕ</span>
                        <Icon name="ArrowRight" size={20} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="iconic" className="space-y-8">
              {sneakers.filter(s => s.tags.includes('Iconic')).map((sneaker) => (
                <Card 
                  key={sneaker.id}
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-8">
                    <img 
                      src={sneaker.image}
                      alt={sneaker.name}
                      className="w-full aspect-square object-cover rounded-sm"
                    />
                    <div className="flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">{sneaker.year}</Badge>
                      <h3 className="text-4xl font-black mb-4">{sneaker.name}</h3>
                      <p className="text-muted-foreground">{sneaker.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="experimental" className="space-y-8">
              {sneakers.filter(s => s.tags.includes('Experimental') || s.tags.includes('Avant-garde')).map((sneaker) => (
                <Card 
                  key={sneaker.id}
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-8">
                    <img 
                      src={sneaker.image}
                      alt={sneaker.name}
                      className="w-full aspect-square object-cover rounded-sm"
                    />
                    <div className="flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">{sneaker.year}</Badge>
                      <h3 className="text-4xl font-black mb-4">{sneaker.name}</h3>
                      <p className="text-muted-foreground">{sneaker.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        <section className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black mb-4">ГАЛЕРЕЯ</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Все модели в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
            {sneakers.map((sneaker) => (
              <Card 
                key={sneaker.id}
                className="group overflow-hidden bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedSneaker(sneaker)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold mb-2">{sneaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{sneaker.year}</p>
                      <div className="flex gap-2 mt-3">
                        {sneaker.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="relative z-10 border-t border-border/50 mt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-black mb-2">RICK OWENS</h3>
                <p className="text-muted-foreground text-sm">Dark Avant-Garde Fashion</p>
              </div>
              <div className="flex gap-6">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground text-sm">
              <p>© 2024 Rick Owens Archive. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;