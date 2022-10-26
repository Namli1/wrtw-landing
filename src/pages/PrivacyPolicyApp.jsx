import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicyApp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Datenschutzerklärung der WRTW-App</h1>
              </div>

              {/* Form */}
              <div className="mx-auto">

                <p>Diese Webseite wird bereitgestellt von We Run The World (im Folgenden „uns“ oder „wir“).</p>
                
                <br />

                <h3 className='h3'>Kontakt</h3>

                <p>
                Kontaktieren Sie uns unter:
                <br />
                E-Mail-Adresse: wrtw2022@outlook.com 
                <br />
                <br />

                <br />
                <br />

                <h3 className='h3'>Nutzung der Login-Dienste Dritter / Single Sign-on </h3>
                Ihre Einwilligung vorausgesetzt (Art. 6(1)(a) Datenschutz-Grundverordnung), bieten wir Ihnen die Möglichkeit, sich über Google-Sign-In oder Sign-In-With-Apple, einem Drittanbieter für Login-Dienste (im Folgenden „Login-Provider“), zur Nutzung unserer App anzumelden. Wenn Sie diesen Login-Dienst nutzen möchten, werden Sie aufgefordert, sich beim Login-Provider mit Ihren entsprechenden Anmeldedaten einzuloggen. Dabei wird Ihr Profil mit unseren Diensten verknüpft, d.h. der Login-Provider erhält die Information, dass Sie unsere Dienste nutzen und die folgenden Angaben werden automatisch an uns übermittelt: 

                <br />
                <br />
                <ul className='list-disc'>
                    <li>Die Information, dass Ihre Identität vom Login-Provider authentifiziert wurde</li>
                    <li>Ihre E-Mail-Adresse </li>
                </ul>
                <br />
                Diese Angaben werden wir nur zum Zweck der Registrierung verwenden und um Sie zu identifizieren, wenn Sie sich einloggen. Sollte der Login-Provider mehr Angaben über Sie übermitteln als wir zur Login-Verifizierung benötigen, so werden wir diese umgehend löschen. Weitere Informationen über den Dienst des Login-Providers und darüber, wie dieser Ihre personenbezogenen Daten verarbeitet, finden Sie in der Datenschutzerklärung des Login-Providers: 
                <br />
                <a href="https://policies.google.com/privacy?hl=de" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Datenschutzerklärung - Datenschutzerklärung & Nutzungsbedingungen - Google 
Legal - Privacy Policy - Apple  </a>
                <br />
                Wir löschen Ihre personenbezogenen Daten, wenn Sie Ihr Konto bei uns löschen. 
                </p>

                <br />
                <br />

                <h3 className='h3'>„Newsletter“ über die App</h3>
                Um rechtzeitig über den Start und die Verfügbarkeit der App zu informieren, können Personen, die sich für den Projekt „We Run The World“ interessieren und am Wettbewerb teilnehmen möchten, auf unserer Webseite ihre E-Mailadresse hinterlegen und sich damit für den „Newsletter“ anmelden. Es handelt sich nicht um eine klassische Newsletter, die über die Aktivität der Organisation informiert, sondern unter Newsletter ist hier lediglich die Sendung von einigen Nachrichten über den Stand der App.
Die Rechtsgrundlage für die Verarbeitung der E-Mail-Adresse in diesem Zusammenhang ist die Einwilligung der betroffenen Personen (Art. 6(1)(a) DS-GVO).

                <br />
                <br />

                <h3 className='h3'>Löschfristen</h3>
                Gemäß den geltenden Datenschutzbestimmungen speichern wir Ihre personenbezogenen Daten nicht länger, als wir sie für die Zwecke der jeweiligen Verarbeitung benötigen. Sofern die Daten nicht mehr zur Erfüllung vertraglicher oder gesetzlicher Pflichten benötigt werden, werden sie von uns regelmäßig gelöscht, außer, ihre befristete Aufbewahrung ist weiter notwendig. Folgende Gründe können z.B. für eine weitere Aufbewahrung vorliegen:
                <br />
                <br />
                <ul className='list-disc'>
                    <li>Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen</li>
                    <li>Schutz der Rechte einer anderen natürlichen oder juristischen Person</li>
                </ul>
                
                <br />

                <h3 className='h3'>Externe Dienste und Inhalte in unserer App</h3>
                <br />
                Wir binden externe Dienste oder Inhalte in unsere App ein. Wenn Sie einen solchen Dienst verwenden oder wenn Ihnen Inhalte Dritter angezeigt werden, werden technisch bedingt Kommunikationsdaten zwischen Ihnen und dem jeweiligen Anbieter ausgetauscht. 
                Es ist möglich, dass der Anbieter der jeweiligen Dienste oder Inhalte darüber hinaus Ihre personenbezogenen Daten für weitere, eigene Zwecke verarbeitet. Daher haben wir die Dienste bzw. Inhalte von Anbietern, die bekanntermaßen personenbezogene Daten für eigene Zwecke verarbeiten, nach bestem Wissen so konfiguriert, dass entweder eine Kommunikation für andere Zwecke als zur Darstellung der Inhalte bzw. Dienste in unserer App unterbunden wird oder eine Kommunikation erst dann stattfindet, wenn Sie sich aktiv dazu entschieden haben, den betreffenden Dienst zu verwenden. Da jedoch durch Dritte erhobene und verarbeitete personenbezogene Daten nicht unserer Kontrolle unterliegen, können wir bezüglich Zweck und Umfang solch einer Verarbeitung Ihrer personenbezogenen Daten keine verbindlichen Angaben machen. 
                <br />
                Weitere Informationen über Zweck und Umfang der Verarbeitung Ihrer personenbezogenen Daten entnehmen Sie bitte den Datenschutzhinweisen der jeweils datenschutzrechtlich verantwortlichen Anbieter der von uns eingebundenen Dienste bzw. Inhalte: 
                                
                <br />
                <ul className='list-disc'>
                    <li>
                        <a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fpolicy%2F%3Fentry_point%3Ddata_policy_redirect%26entry%3D0" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                            Facebook Teilen-Button
                        </a>
                    </li>
                    <li>
                        <a href="https://policies.google.com/privacy?hl=de&gl=de" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                        YouTube Videos
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/help/instagram/155833707900388/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                        Instagram Teilen-Button  
                        </a>
                    </li>
	                
                </ul>
                
                <br />
                
                <h3 className='h3'>Nutzung der Login-Dienste Dritter / Single Sign-on </h3>
                Ihre Einwilligung vorausgesetzt (Art. 6(1)(a) Datenschutz-Grundverordnung), bieten wir Ihnen die Möglichkeit, sich über Google-Sign-In oder Sign-In-With-Apple, einem Drittanbieter für Login-Dienste (im Folgenden „Login-Provider“), zur Nutzung unserer App anzumelden. Wenn Sie diesen Login-Dienst nutzen möchten, werden Sie aufgefordert, sich beim Login-Provider mit Ihren entsprechenden Anmeldedaten einzuloggen. Dabei wird Ihr Profil mit unseren Diensten verknüpft, d.h. der Login-Provider erhält die Information, dass Sie unsere Dienste nutzen und die folgenden Angaben werden automatisch an uns übermittelt: 

                <br />
                <ul className='list-disc'>
                    <li>Die Information, dass Ihre Identität vom Login-Provider authentifiziert wurde </li>
                    <li>Ihre E-Mail-Adresse</li>
                </ul>

                Diese Angaben werden wir nur zum Zweck der Registrierung verwenden und um Sie zu identifizieren, wenn Sie sich einloggen. Sollte der Login-Provider mehr Angaben über Sie übermitteln als wir zur Login-Verifizierung benötigen, so werden wir diese umgehend löschen.  
                <br />
                In beiden Fällen werden Ihre Daten gegebenenfalls in die USA übermittelt. Für die USA ist kein Angemessenheitsbeschluss der EU-Kommission vorhanden. Die Datenübermittlung erfolgt u.a auf Grundlage von Standardvertragsklauseln als geeignete Garantien für den Schutz der personenbezogenen Daten.  
                <br />
                <br />
                Bei der Nutzung vom Authentifizierungsdienst Apple Single-Sign-on ist der Dienstanbieter Apple Inc., Infinite Loop, Cupertino, CA 95014, USA. 
Mehr über die Datenverarbeitung in diesem Rahmen erfahren Sie auf : 
                <a href="https://www.apple.com/legal/privacy/de-ww/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                Apple Datenschutzrichtlinie - Apple
                </a> 

                <br />
                <br />
                Bei der Nutzung vom Authentifizierungsdienst Google Single-Sign-on ist der Dienstanbieter Google Ireland Limited, Gordon House, Barrow Street Dublin 4, irland. 
                Mehr über die Standardvertragsklauseln bei Google erfahren Sie in den Google Ads Datenverarbeitungsbedingungen unter: 
                <a href="https://business.safety.google/adsprocessorterms/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                https://business.safety.google/adsprocessorterms/.
                </a> 
                
                Bei Google können Sie Ihre Einwilligung zur Verwendung von Single-Sign-On-Anmeldungen per Opt-Out-Funktion widerrufen:  
                <br />
                <a href="https://adssettings.google.com/authenticated?hl=en" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                Sign in - Google Accounts - Ads Settings 
                </a> 
                
                
                Mehr über die Datenverarbeitung in diesem Rahmen erfahren Sie auf : 
                <a href="https://policies.google.com/privacy?hl=de" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                Datenschutzerklärung - Datenschutzerklärung & Nutzungsbedingungen - Google 
                </a>
                


                <br />
                <br />
                <h3 className='h3'>Nutzung von Mapbox</h3>

                Wir verwenden bei unserem App die Dienste von Mapbox API. Anbieter dieser Dienstleistung ist Mapbox Inc., 740 15th Street NY, 500 Washington, District of Columbia 20005, USA 
                <br />
                Mapbox ist ein Online_Kartendienst, der über über eine Schnittstelle (API) abgerufen wird. Mit Mapbox kann man Inhalte auf unserer App illustrieren oder Anfahrtswege grafisch darstellen.  

                <br />
                <br />

                Durch die Nutzung dieses Tools werden Ihre IP-Adresse und Informationen über Ihr Betriebssystem, den Inhalt der Anfrage, eingeschränkte Standorts- und Nutzungsdaten, Datum und Uhrzeit des Besuchs an Mapbox weitergeleitet. Laut ihrer Datenschutzerklärung werden die Daten von Mapbox zur Verbesserung der eigenen Produkte verwendet. Zudem sammelt Mapbox auch zufällig generierte IDs, um Nutzerverhalten zu analysieren und die Anzahl der aktiven User festzustellen. 
                <br />
                Die Rechtsgrundlage für die Datenverarbeitung in diesem Rahmen ist Artikel 6 Abs.1 lit.b DS-GVO. Wenn Sie die App installieren, akzeptieren Sie im Rahmen der allgemeinen Konditionen für die Nutzung der App die Verwendung von Mapbox und die damit verbunden möglichen Datenverarbeitungen. 
                <br />Wir haben mit Mapbox einen Auftragsverarbeitungsvertrag abgeschlossen. 

                <br />
                <br />

                Da eine Übertragung personenbezogener Daten in die USA erfolgt, sind Schutzmechanismen erforderlich, die das Datenschutzniveau der DS-GVO sicherstellen. Um dies zu gewährleisten, haben wir mit Mapbox Standarddatenschutzklauseln gemäß Art. 46 Abs. 2 lit. c) DS-GVO vereinbart. Diese verpflichten die Empfänger der Daten in den USA, die Daten entsprechend dem Schutzniveau in Europa zu verarbeiten. 
                <br /> Um Mehr Informationen über die Datenverarbeitung, die durch Mapbox stattfindet, und über den Auftragsverarbeitungsvertrag und den Rahmen für die Übermittlung der Daten in den USA zu erfahren, siehe:  

                <ul className='list-disc'>
                    <li>
                        <a href="https://www.mapbox.com/legal/privacy/" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                        Legal information about Privacy (mapbox.com) 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mapbox.com/legal/dpa" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                        Legal information about Mapbox DPA 
                        </a>
                    </li>
	                
                </ul>

                <br />
                <br />

                <h3 className='h3'>Plug-Ins</h3>
                Wir binden externe Dienste oder Inhalte in unsere App ein. Wenn Sie einen solchen Dienst verwenden oder wenn Ihnen Inhalte Dritter angezeigt werden, werden technisch bedingt Kommunikationsdaten zwischen Ihnen und dem jeweiligen Anbieter ausgetauscht. 
Es ist möglich, dass der Anbieter der jeweiligen Dienste oder Inhalte darüber hinaus Ihre personenbezogenen Daten für weitere, eigene Zwecke verarbeitet. Daher haben wir die Dienste bzw. Inhalte von Anbietern, die bekanntermaßen personenbezogene Daten für eigene Zwecke verarbeiten, nach bestem Wissen so konfiguriert, dass entweder eine Kommunikation für andere Zwecke als zur Darstellung der Inhalte bzw. Dienste in unserer App unterbunden wird oder eine Kommunikation erst dann stattfindet, wenn Sie sich aktiv dazu entschieden haben, den betreffenden Dienst zu verwenden. Da jedoch durch Dritte erhobene und verarbeitete personenbezogene Daten nicht unserer Kontrolle unterliegen, können wir bezüglich Zweck und Umfang solch einer Verarbeitung Ihrer personenbezogenen Daten keine verbindlichen Angaben machen. 
                
                <br />
                <br />

                <h5 className='h4'>Facebook</h5>
                Unser App verwendet ein Social Plug-in („Plug-in“) des sozialen Netzwerkes facebook.com, das von der Meta Platforms Ireland Limited (ehemals “Facebook Ireland Limited” (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland). Meta Platforms Ireland betrieben wird („Facebook“). 
                <br />

                <br />
                <br />

                Mit einem Klick auf einen Button neben dem Instagram-Logo können Sie eine Verbindung mit den Servern von Instagram aufbauen. Der Inhalt des Plug-ins wird nach der Aktivierung durch Sie von Instagram direkt an Ihren Browser übermittelt. Wir haben keinen Einfluss auf den Umfang der Daten, die Instagram mit Hilfe dieses Plug-ins erhebt und informieren Sie daher entsprechend unseres Kenntnisstands. Sind Sie bei Instagram eingeloggt, kann Instagram den Besuch Ihrem Instagram-Konto zuordnen. Wenn Sie mit dem Plug-in interagieren, also den Like-Button betätigen, wird die entsprechende Information von Ihrem Browser direkt an Instagram übermittelt und dort gespeichert. Falls Sie kein Mitglied von Instagram sind, besteht trotzdem die Möglichkeit, dass Instagram Ihre IP-Adresse in Erfahrung bringt und speichert. Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Instagram sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatssphäre entnehmen Sie bitte den Datenschutzhinweisen von Instagram. Wenn Sie Instagrammitglied sind und nicht möchten, dass Instagram über unseren Internetauftritt Daten über Sie sammelt und mit Ihren bei Instagram gespeicherten Mitgliedsdaten verknüpft, müssen Sie sich vor der Aktivierung des Plug-ins auf unserer Seite bei Instagram ausloggen. 

                Da eine Übertragung personenbezogener Daten in die USA erfolgt, sind weitere Schutzmechanismen erforderlich, die das Datenschutzniveau der DS-GVO sicherstellen. Um dies zu gewährleisten, haben wir mit dem Anbieter Standarddatenschutzklauseln gemäß Art. 46 Abs. 2 lit. c) DS-GVO vereinbart. Diese verpflichten den Empfänger der Daten in den USA, die Daten entsprechend dem Schutzniveau in Europa zu verarbeiten. 
                unter: 
                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                https://www.facebook.com/legal/EU_data_transfer_addendum
                        </a>. 
                Nähere Informationen zur Erhebung und Nutzung der Daten durch Meta Platforms, über Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen von Instagram unter dem Punkt IX: 
                <a href="https://help.instagram.com/519522125107875" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                https://help.instagram.com/519522125107875
                </a>. 


                <br />
                <br />
                
                <h5 className='h4'>YouTube</h5>
                Wir verwenden auf unserer App die Funktion zur Einbettung von YouTube-Videos der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland; „YouTube“).YouTube ist ein mit der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; “Google”) verbundenes Unternehmen. Die Funktion zeigt bei YouTube hinterlegte Videos in einem iFrame auf der App an. Dabei ist die Option „Erweiterter Datenschutzmodus“ aktiviert. Dadurch werden von YouTube keine Informationen über die Nutzer der App gespeichert. Erst wenn Sie sich ein Video ansehen, werden Informationen darüber an YouTube übermittelt und dort gespeichert. Ihre Daten werden gegebenenfalls in die USA übermittelt. Für die USA ist kein Angemessenheitsbeschluss der EU-Kommission vorhanden. Die Datenübermittlung erfolgt u.a auf Grundlage von Standardvertragsklauseln als geeignete Garantien für den Schutz der personenbezogenen Daten, einsehbar unter: 
                <a href="https://policies.google.com/privacy/frameworks" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                https://policies.google.com/privacy/frameworks
                </a> 
                . Nähere Informationen zur Erhebung und Nutzung der Daten durch YouTube und Google, über Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen von YouTube unter 
                <a href="https://www.youtube.com/t/privacy" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                https://www.youtube.com/t/privacy.
                </a> 
                 
                <br />

                <br />
                <h3 className='h3'>Kontakt </h3>
                Für Ihre Anliegen zum Datenschutz schreiben Sie bitte an wrtw2022@outlook.com.

              </div>

            </div>
 
          </div>
        </section>

      </main>

    </div>
  );
}

export default PrivacyPolicyApp;