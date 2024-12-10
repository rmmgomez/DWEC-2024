import { Directive, output } from '@angular/core';

@Directive({
  selector: 'input[type=file][encodeBase64]',
  standalone: true,
  host: {
    '(change)': 'encodeFile($event)'
  }
})
export class EncodeBase64Directive {
  encoded = output<string | null>();

  encodeFile(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) {
      this.encoded.emit(null);
      return;
    };
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.encoded.emit(reader.result as string);
    });
  }
}