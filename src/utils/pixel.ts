export const trackWhatsAppClick = (packageName?: string, price?: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    if (packageName && price) {
      // Evento de Iniciar Finalização de Compra para os pacotes
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: packageName,
        value: parseFloat(price.replace('.', '').replace(',', '.')),
        currency: 'BRL'
      });
    } else {
      // Evento de Contato genérico para os botões de suporte
      (window as any).fbq('track', 'Contact');
    }
  }
};
