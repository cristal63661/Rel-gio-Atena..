function atualizarRelogio() {
      const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
          const minutos = agora.getMinutes().toString().padStart(2, '0');
            const segundos = agora.getSeconds().toString().padStart(2, '0');
              const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
                const diaSemana = diasSemana[agora.getDay()];
                  const dia = agora.getDate();
                    const mes = agora.toLocaleString('pt-BR', { month: 'short' });
                      const ano = agora.getFullYear();

                        document.getElementById('clock').textContent = `${horas}:${minutos}:${segundos}`;
                          document.getElementById('date').textContent = `${diaSemana}, ${dia} ${mes} ${ano}`;
                          }

                          function toggleModo() {
                            document.body.classList.toggle('claro');
                              const botao = document.getElementById('modoBtn');
                                botao.textContent = document.body.classList.contains('claro') ? 'Modo Escuro' : 'Modo Claro';
                                }

                                function celebrar() {
                                  document.body.classList.add('celebrar');
                                    setTimeout(() => {
                                        document.body.classList.remove('celebrar');
                                          }, 5000);
                                          }

                                          setInterval(atualizarRelogio, 1000);
                                          atualizarRelogio();