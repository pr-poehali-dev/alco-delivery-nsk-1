import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [birthDate, setBirthDate] = useState('');

  const handleVerification = () => {
    if (!birthDate) return;
    
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      if (age - 1 >= 18) {
        setIsAgeVerified(true);
        setShowVerification(false);
        window.open('https://t.me/jinkotik_bot/order', '_blank');
      }
    } else {
      if (age >= 18) {
        setIsAgeVerified(true);
        setShowVerification(false);
        window.open('https://t.me/jinkotik_bot/order', '_blank');
      }
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🍸</span>
            <h1 className="text-2xl font-bold text-primary">ДжинКотик</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-primary-foreground hover:text-primary transition-colors">О сервисе</a>
            <a href="#contacts" className="text-primary-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Премиальная доставка<br />
                <span className="text-primary">алкоголя</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Эксклюзивная коллекция напитков с доставкой по Новосибирску за 60 минут
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform"
                onClick={() => setShowVerification(true)}
              >
                Оформить заказ
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/849e3639-fc95-4eb1-a53a-d8f81252a0b0/files/2faf7c4a-3964-4d04-8b86-f29c43d33f29.jpg" 
                alt="Premium alcohol collection" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center text-secondary mb-4">О сервисе</h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            ДжинКотик — это премиальный сервис доставки элитного алкоголя для ценителей качества
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Быстрая доставка</CardTitle>
                <CardDescription className="text-base">
                  Доставим ваш заказ в течение 60 минут по всему Новосибирску
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">100% оригинал</CardTitle>
                <CardDescription className="text-base">
                  Работаем только с официальными поставщиками премиальных брендов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Люкс-сегмент</CardTitle>
                <CardDescription className="text-base">
                  Эксклюзивная коллекция для взыскательных клиентов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/849e3639-fc95-4eb1-a53a-d8f81252a0b0/files/7c334784-935f-4e52-ac6e-230ec2df31f7.jpg" 
                alt="Delivery service" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h4 className="text-4xl font-bold text-secondary mb-6">Наши преимущества</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Верификация возраста</h5>
                    <p className="text-muted-foreground">
                      Строгий контроль возраста клиентов при оформлении заказа
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Конфиденциальность</h5>
                    <p className="text-muted-foreground">
                      Деликатная упаковка и полная анонимность доставки
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-2">Консультация сомелье</h5>
                    <p className="text-muted-foreground">
                      Поможем выбрать идеальный напиток для любого случая
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold text-center text-primary mb-4">Контакты</h3>
          <p className="text-center text-primary-foreground text-lg mb-16">
            Свяжитесь с нами удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Phone" size={28} className="text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+73833334455" className="text-xl text-primary hover:underline">
                  +7 (383) 333-44-55
                </a>
                <p className="text-muted-foreground mt-2">Ежедневно с 10:00 до 02:00</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Mail" size={28} className="text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@jinkotik.ru" className="text-xl text-primary hover:underline">
                  info@jinkotik.ru
                </a>
                <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MapPin" size={28} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">г. Новосибирск</p>
                <p className="text-muted-foreground mt-2">Доставка по всему городу</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MessageCircle" size={28} className="text-primary" />
                  Мессенджеры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="#" className="block text-xl text-primary hover:underline">WhatsApp</a>
                  <a href="#" className="block text-xl text-primary hover:underline">Telegram</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary border-t border-primary/20 py-8 px-6">
        <div className="container mx-auto text-center text-primary-foreground">
          <p className="text-sm">© 2024 ДжинКотик. Продажа алкоголя лицам старше 18 лет.</p>
          <p className="text-xs mt-2 text-muted-foreground">Чрезмерное употребление алкоголя вредит вашему здоровью</p>
        </div>
      </footer>

{showVerification && !isAgeVerified && (
        <Dialog open={true} onOpenChange={setShowVerification}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl">Верификация возраста</DialogTitle>
              <DialogDescription className="text-base">
                Для оформления заказа необходимо подтвердить, что вам исполнилось 18 лет
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="birthdate">Дата рождения</Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                onClick={handleVerification}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!birthDate}
              >
                Подтвердить возраст
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {isAgeVerified && (
        <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-xl animate-scale-in">
          <p className="flex items-center gap-2">
            <Icon name="CheckCircle2" size={20} />
            Возраст подтверждён
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;