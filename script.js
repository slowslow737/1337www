drawParticles() {
    return `<g class="particles" filter=${this.filterParticles || "none"}>
      ${(() => {
        if (this.strokeGradient) {
          return `
          <defs>
            <linearGradient id=${this.strokeGradient.idStrokeGradient} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color=${this.strokeGradient.color1} />
              <stop offset="100%" stop-color=${this.strokeGradient.color2} />
            </linearGradient>
          </defs>`
        }
      })()}
      ${Array(this.nbrParticles).fill().map((_,i) =>
        `<circle
          r="${this.setRadiusParticles(i)}"
          cx=${this.pos.x} cy=${this.pos.y}
          fill="${this.fillParticles || "none"}"
          fill-opacity="${this.fillOpacityParticles || 1}"
          stroke="${this.strokeGradient ? `url(#${this.strokeGradient.idStrokeGradient})` : this.strokeColorParticles}"
          stroke-width="${this.strokeWidthParticles || 0}"
          stroke-opacity="${this.strokeOpacityParticles || 1}"
          id="${i}">
        </circle>`).join('')}
    </g>`
  }
