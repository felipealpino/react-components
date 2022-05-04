export function masker(val: string, mask: string): string {
  let k = 0;
  let maskared = '';

  for (let i = 0; i <= mask.length - 1; ++i) {
    if (mask[i] == '#') {
      if (val[k]) {
        maskared += val[k++];
      }
    } else if (mask[i]) {
      maskared += mask[i];
    }
  }

  return maskared;
}
