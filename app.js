document.addEventListener('DOMContentLoaded', () => {
      const mainContent = document.getElementById('mainContent');
      const navLinks = document.querySelectorAll('.sidebar-nav a');

                              const appState = {
                                        currentPhase: 'icp',
                                        inbox: [
                                          { id: 1, sender: 'Giulia Ferretti', subject: 'Re: Proposta OutreachAI', preview: 'Interessante, sentiamoci martedi...', date: '10:45', content: 'Ciao! Ho visto la vostra proposta e sembra molto interessante.' },
                                          { id: 2, sender: 'Marco Rossi', subject: 'Budget 2024', preview: 'Ho ricevuto la vostra email...', date: 'Ieri', content: 'Gentili colleghi, ho ricevuto l\'email personalizzata.' }
                                                  ]
                              };

                              const renderPhase = (phaseId) => {
                                        appState.currentPhase = phaseId;
                                        navLinks.forEach(link => {
                                                      link.classList.toggle('active', link.getAttribute('href') === `#${phaseId}`);
                                        });

                                        switch (phaseId) {
                                          case 'icp': renderICP(); break;
                                          case 'contacts': renderContacts(); break;
                                          case 'pipeline': renderPipeline(); break;
                                          case 'inbox': renderInbox(); break;
                                          case 'integrations': renderIntegrations(); break;
                                          default: renderICP();
                                        }
                              };
      const renderICP = () => {
                mainContent.innerHTML = `
                            <div class="phase-header">
                                            <h1><i class="fas fa-bullseye"></i> ICP Builder</h1>
                                                            <p>Pianificazione del profilo cliente ideale.</p>
                                                                        </div>
                                                                                    <div class="card">
                                                                                                    <h3>Smart Filters AI</h3>
                                                                                                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top:15px;">
                                                                                                                                        <div><label>Settore</label><select class="btn-primary" style="background:#334155; width:100%"><option>Tecnologia</option><option>Manifatturiero</option></select></div>
                                                                                                                                                            <div><label>Zona</label><input type="text" value="Padova" style="background:#334155; border:none; color:white; padding:10px; width:94%; border-radius:8px"></div>
                                                                                                                                                                            </div>
                                                                                                                                                                                            <button class="btn-primary" style="margin-top:20px" onclick="alert('Ricerca...')">Cerca Aziende</button>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    <div class="card">
                                                                                                                                                                                                                                    <table>
                                                                                                                                                                                                                                                        <thead><tr><th>Azienda</th><th>Settore</th><th>Fatturato</th><th>Dipendenti</th></tr></thead>
                                                                                                                                                                                                                                                                            <tbody>
                                                                                                                                                                                                                                                                                                    <tr><td>TechNova SRL</td><td>Tecnologia</td><td>5M - 10M</td><td>150</td></tr>
                                                                                                                                                                                                                                                                                                                            <tr><td>Innovation Hub</td><td>Tecnologia</td><td>2M - 5M</td><td>45</td></tr>
                                                                                                                                                                                                                                                                                                                                                </tbody>
                                                                                                                                                                                                                                                                                                                                                                </table>
                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                    `;
      };

                              const renderContacts = () => {
                                        mainContent.innerHTML = `
                                                    <div class="phase-header"><h1><i class="fas fa-search"></i> Contact Discovery</h1><p>Ricerca dei Decision Maker via Waterfall Enrichment.</p></div>
                                                                <div class="card">
                                                                                <h3>Parametri Ricerca</h3>
                                                                                                <input type="text" value="Responsabile HR" style="background:#334155; border:none; color:white; padding:10px; width:40%; border-radius:8px; margin-right:10px">
                                                                                                                <button class="btn-primary" onclick="alert('Enrichment...')">Avvia Enrichment AI</button>
                                                                                                                            </div>
                                                                                                                                        <div class="card">
                                                                                                                                                        <table>
                                                                                                                                                                            <thead><tr><th>Nome</th><th>Ruolo</th><th>Email</th><th>Stato</th></tr></thead>
                                                                                                                                                                                                <tbody>
                                                                                                                                                                                                                        <tr><td>Giuseppe Verdi</td><td>HR Manager</td><td>g.verdi@technova.it <i class="fas fa-check-circle" style="color:#10b981"></i></td><td><span class="status-badge">Verificato</span></td></tr>
                                                                                                                                                                                                                                                <tr><td>Elena Bianchi</td><td>CEO</td><td>e.bianchi@innohub.com <i class="fas fa-check-circle" style="color:#10b981"></i></td><td><span class="status-badge">Verificato</span></td></tr>
                                                                                                                                                                                                                                                                    </tbody>
                                                                                                                                                                                                                                                                                    </table>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                        `;
                              };
      const renderPipeline = () => {
                mainContent.innerHTML = `
                            <div class="phase-header"><h1><i class="fas fa-magic"></i> Pipeline & AI Personalization</h1><p>Generazione messaggi e approvazione umana.</p></div>
                                        <div class="card">
                                                        <button class="btn-primary" onclick="alert('Generazione...')">Genera tutti i messaggi AI</button>
                                                                    </div>
                                                                                <div class="card">
                                                                                                <table>
                                                                                                                    <thead><tr><th>Contatto</th><th>Azienda</th><th>Messaggio AI</th><th>Azione</th></tr></thead>
                                                                                                                                        <tbody>
                                                                                                                                                                <tr><td>Giuseppe Verdi</td><td>TechNova</td><td>"Ho visto che la vostra accademia..."</td><td><button class="btn-primary" style="padding:5px 10px">Approva</button></td></tr>
                                                                                                                                                                                    </tbody>
                                                                                                                                                                                                    </table>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                        `;
      };

                              const renderInbox = () => {
                                        mainContent.innerHTML = `
                                                    <div class="phase-header"><h1><i class="fas fa-inbox"></i> Unified Inbox</h1><p>Gestione risposte centralizzata.</p></div>
                                                                <div style="display:flex; gap:20px">
                                                                                <div class="card" style="flex:1">
                                                                                                    ${appState.inbox.map(m => `
                                                                                                                            <div style="padding:15px; border-bottom:1px solid #334155; cursor:pointer">
                                                                                                                                                        <div style="display:flex; justify-content:space-between"><strong>${m.sender}</strong><span>${m.date}</span></div>
                                                                                                                                                                                    <div style="font-size:14px; color:#94a3b8">${m.subject}</div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                `).join('')}
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                <div class="card" style="flex:2">
                                                                                                                                                                                                                                                                                    <h3>Conversazione con Giulia Ferretti</h3>
                                                                                                                                                                                                                                                                                                        <div style="margin:20px 0; padding:15px; background:#0f172a; border-radius:8px">
                                                                                                                                                                                                                                                                                                                                ${appState.inbox[0].content}
                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                        `;
                              };
      const renderIntegrations = () => {
                mainContent.innerHTML = `<h1>Integrazioni</h1><div class="card"><p>HubSpot: <span class="status-badge">Connesso</span></p><p>Gmail: <span class="status-badge">Pronto</span></p></div>`;
      };

                              window.addEventListener('hashchange', () => {
                                        const phaseId = window.location.hash.slice(1) || 'icp';
                                        renderPhase(phaseId);
                              });

                              renderPhase(window.location.hash.slice(1) || 'icp');
});
