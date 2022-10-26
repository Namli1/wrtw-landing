import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden theme-background">

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Datenschutzerklärung</h1>
              </div>

              {/* Form */}
              <div className="mx-auto">

                <p>Diese Webseite wird bereitgestellt von We Run The World (im Folgenden „uns“ oder „wir“).</p>
                
                <br />

                <h3 className='h3'>Verantwortlicher</h3>

                <p>
                Als Verantwortlicher gemäß Art. 4 (7) Datenschutzgrundverordnung (DS-GVO) ergreifen wir, die
                <br />
                <br />
                Tilman Herz<br />
                Damaschkeanger 103<br />
                60488 Frankfurt<br />
                <br />
                E-Mail-Adresse: wrtw2022@outlook.com 
                <br />
                <br />
                alle nach geltendem Datenschutzrecht erforderlichen Maßnahmen, um den Schutz Ihrer personenbezogenen Daten zu gewährleisten.

                <br />
                <br />

                <h3 className='h3'>Aufruf der Website</h3>
                Wenn Sie unsere Website aufrufen, überträgt Ihr Browser technisch bedingt bestimmte Informationen an unseren Webserver, um Ihnen die von Ihnen aufgerufenen Informationen zur Verfügung zu stellen. Um Ihnen den Besuch der Website zu ermöglichen, werden dabei folgende Informationen erhoben, kurzfristig gespeichert und verwendet:

                <br />
                <br />
                <ul className='list-disc'>
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit der Anfrage</li>
	                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                    <li>Inhalt der Anforderung (konkrete Seite) </li>
                    <li>Betriebssystem und dessen Oberfläche</li>
                    <li>Zugriffsstatus / HTTP-Statuscode</li>
                    <li>Übertragene Datenmenge </li>
                    <li>Website, von der die Anforderung kommt </li>
                    <li>Browser, Sprache und Version der Browsersoftware </li>	
                </ul>
                <br />
                Zum Schutz unserer berechtigten Interessen werden wir die o.g. Angaben für eine begrenzte Zeit speichern, um im Falle eines unberechtigten Zugriffs oder Zugriffsversuchs auf unsere Server eine Herleitung der personenbezogen Daten veranlassen zu können (Art. 6(1)(f) DS-GVO).
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

                <h3 className='h3'>Einsatz von Cookies</h3>
                <br />
                <h5 className='h4'>Was Cookies sind</h5>
                Auf dieser Website setzen wir so genannte „Cookies“ ein. Cookies sind kleine Textdateien, die über Ihren Browser im Speicher Ihres Endgeräts abgelegt werden. Cookies speichern bestimmte Informationen (z.B. die von Ihnen bevorzugte Sprache oder Seiteneinstellungen), die durch Ihren Browser bei einem erneuten Besuch der Website an uns zurückgesendet werden können (abhängig von der Lebensdauer des Cookies). 
                
                <br />
                <br />
                <h5 className='h4'>Welche Cookies wir einsetzen</h5>
                Wir setzen lediglich funktionsbezogene Cookies auf der Grundlage unserer berechtigten Interessen (Art. 6(1)(f) DS-GVO) auf dieser Webseite ein, ohne die die Funktionalität unserer Webseite eingeschränkt wäre. 

                <br />
                <br />
                <h3 className='h3'>Host der Webseite</h3>
                Die Webseite wird auf den Servern der Firma GitHub B.V. gehostet.

                <br /><br />
                GitHub B.V.<br />
                88 Colin P Kelly Junior Street <br />
                San Francisco, CA 94107 USA<br />
                <br />

                Wir haben mit diesem Unternehmen einen Vertrag zur Auftragsverarbeitung gemäß Art. 28 DS-GVO geschlossen.
                <br />
                Weitere Informationen zur Datenverarbeitung und zum Datenschutz durch GitHub B.V. sind unter folgendem Link abrufbar: <a className='text-blue-600 visited:text-purple-600' href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>

                <br />
                <br />
                <h3 className='h3'>Einbindung von einem Formular</h3>

                Auf der Webseite ist ein Formular eingebunden, das durch aidaforms.com bereitgestellt wird.
                <br />
                Verantwortlich für diese Webseite:
                <br />
                <br />

                Firmenname: Alexander Grigorev<br />
                Umsatzsteuer Ident.-Nr.: DE 318939819<br />
                Adresse: Im Uckerfeld 14, Bonn, 53127, Germany<br />
                <br />

                Weitere Informationen zur Datenverarbeitung und zum Datenschutz durch Alexander Grigorev sind unter folgendem Link abrufbar: <a className='text-blue-600 visited:text-purple-600' href="https://de.aidaform.com/privacy-policy.html">https://de.aidaform.com/privacy-policy.html</a>

                
                <br />
                <br />
                <h3 className='h3'>Informationen über Ihre Rechte</h3>
                Sie haben die folgenden Rechte:
                
                <ul className='list-disc'>
                    <li>Das Recht auf Auskunft über die bei uns zu Ihrer Person gespeicherten personenbezogenen Daten.</li>
                    <li>Das Recht auf Berichtigung, Löschung oder Beschränkung der Verarbeitung Ihrer personenbezogenen Daten.</li>
	                <li>Das Recht auf Widerspruch gegen eine Verarbeitung, die unserem berechtigten Interesse dient, es sei denn, wir können nachweisen, dass zwingende schutzwürdige Gründe für die Verarbeitung bestehen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder dass die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.</li>
                    <li>Das Recht auf Datenübertragbarkeit.</li>
                    <li>Das Recht, Beschwerde bei einer Aufsichtsbehörde vorzubringen.</li>
                    <li>Ihrerseits erteilte Einwilligungen in die Verarbeitung Ihrer personenbezogenen Daten können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Nähere Informationen hierzu finden Sie in denjenigen vorstehenden Abschnitten, die eine Datenverarbeitung auf Grundlage Ihrer Einwilligung beschreiben.</li>
                </ul>

                <br />
                <h3 className='h3'>Kontakt </h3>
                Für Ihre Anliegen zum Datenschutz schreiben Sie bitte an wrtw2022@outlook.com.


                <br />
                <br />
                <h3 className='h3'>Änderungen unserer Datenschutzerklärung</h3>
                Wir behalten uns vor, diese Datenschutzerklärung von Zeit zu Zeit zu aktualisieren. Aktualisierungen dieser Datenschutzerklärung werden auf unserer Website veröffentlicht. Änderungen gelten ab ihrer Publikation auf unserer Website. Wir empfehlen Ihnen daher, diese Seite regelmäßig zu besuchen, um sich über gegebenenfalls erfolgte Aktualisierungen zu informieren:
                <br />
                <br />
                Zuletzt aktualisiert am: 14.06.2022.

                <br />
                <br />
                <br />
                
                <div class='impressum'><h1 className='h1'>Impressum</h1><p>Angaben gemäß § 5 TMG</p><p>Tilman Herz <br /> 
Damaschkeanger 103<br />
60488 Frankfurt <br /> 
</p><p> <strong>Vertreten durch: </strong><br />
Tilman Herz<br />
</p><p><strong>Kontakt:</strong> <br />
E-Mail: <a href='mailto:wrtw2022@gmail.com'>wrtw2022@gmail.com</a><br /></p><p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
Tilman Herz <br />
Damaschkeanger 103<br />
60488 Frankfurt <br /></p> <p><strong>Haftungsausschluss: </strong><br /><br /><strong>Haftung für Inhalte</strong><br /><br />
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br /><strong>Haftung für Links</strong><br /><br />
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br /><br /><strong>Urheberrecht</strong><br /><br />
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p><br /> 
Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</a>
 </div>
                
              </div>

            </div>
 
          </div>
        </section>

      </main>

    </div>
  );
}

export default PrivacyPolicy;