import AwertonMark from './AwertonMark'
import AwertonWordmark from './AwertonWordmark'

const tones = {
  gold: 'text-gold',
  ink: 'text-ink',
  clay: 'text-clay',
  ivory: 'text-ivory',
}

/**
 * Official AWERTON lockup: crystal mark + wordmark, both `currentColor`.
 *
 * - `horizontal` sizes by font-size (use `text-xl`, etc.) — mark beside wordmark.
 * - `vertical` sizes by width (use `w-64`, etc.) — mark stacked over wordmark.
 *
 * @param {'gold'|'ink'|'clay'|'ivory'} tone      brand colour of the lockup
 * @param {boolean} showWordmark                  render the AWERTON wordmark
 * @param {'vertical'|'horizontal'} orientation   stacked or inline lockup
 */
export default function Logo({
  tone = 'gold',
  showWordmark = true,
  orientation = 'vertical',
  className = '',
  style,
}) {
  const color = tones[tone] ?? tones.gold

  if (orientation === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-[0.5em] ${color} ${className}`} style={style}>
        <AwertonMark style={{ height: '1.7em', width: 'auto' }} />
        {showWordmark && <AwertonWordmark style={{ height: '0.6em', width: 'auto' }} />}
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center ${color} ${className}`} style={style}>
      <AwertonMark style={{ width: showWordmark ? '21.2%' : '100%' }} />
      {showWordmark && <AwertonWordmark style={{ width: '100%', marginTop: '7.4%' }} />}
    </div>
  )
}
