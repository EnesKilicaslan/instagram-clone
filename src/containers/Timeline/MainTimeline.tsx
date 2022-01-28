import React from 'react'
import Post from '../../components/Post/Post'
import style from './MainTimeline.module.css'

const c1Text = `Dünyadan Hava Haberleri!
——— 
- İstanbul'da etkili olan kar yağ hava ulaşımının aksamasına neden oldu. İstanbul Havalimanı'nın
tamamen karla kaplanması sonucu tüm operasyonlar durduruldu, Atatürk ve
Sabiha Gökçen Havalimanlarında ise uçuşlara kısıtlı olarak devam edildi.
———
- İstanbul Havalimanı'nda bulunan Turkish Cargo hangar çatısı biriken
kar sebebiyle çöktü. Enkazın altında kalan bir çalışan hafif yaralı
şekilde kurtarıldı.
———
- ABD Donanması’na ait bir F-35C uçağı konuşlu
olduğu USS Carl Vinson uçak gemisine iniş sırasında düştü. Fırlatma
koltuğu ile atlayıp denize düşen pilot helikopter ile kurtarıldı. Kazada 7
denizci yaralandı, uçak kullanılmaz hale geldi.
———
- ABD’de düzenlenen
Red Flag 22-1 Tatbikatı, Kraliyet Hava Kuvvetleri ve Avustralya Kraliyet
Hava Kuvvetleri’nin katılımıyla başladı. Tatbikatta yaklaşık 100 uçak ve
3000 personel görev alacak.
——— 
- Airbus, BelugaST filosunu kullanarak nakliye şirketlerine ve diğer potansiyel müşterilere büyük boyutlu yük
taşımacılığı ihtiyaçlarına bir çözüm sunmak için yeni bir hava kargo
hizmeti başlattı.`,
  c1Owner = 'airfighter',
  c2Text = `Alaska yollarında giderken çektiğim fotoğraflar için sağa kaydırın. Yollar her ne kadar tehlikeli olsa da uzun zamandır yaptığım en güzel araba yolculuğuydu. Fotoğrafları direkt yolda durduğum yerden çektim. Sizce nasıl görünüyor? Herkese iyi akşamla`,
  c2Owner = 'mucahitmuglu'

function MainTimeline() {
  return (
    <div className={style.timeline}>
      <Post ownerCommentName={c1Owner} ownerCommentText={c1Text} />
      <br />
      <br />
      <Post ownerCommentName={c2Owner} ownerCommentText={c2Text} />
      <br />
      <br />
      <Post ownerCommentName={c1Owner} ownerCommentText={c1Text} />
    </div>
  )
}

export default MainTimeline
