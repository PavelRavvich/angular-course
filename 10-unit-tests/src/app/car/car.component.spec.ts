import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from './car.service';
import {Observable} from 'rxjs/Observable';


describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let carService: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });

    fixture =  TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    carService = fixture.debugElement.injector.get(CarService);
  });

  // Тестирование успешного создания компонента.
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  // Тестирование состояния переменной title.
  it('should render h1 with title My car header', () => {
    fixture.detectChanges();
    const nativeElem = fixture.debugElement.nativeElement;
    const text = nativeElem.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

  // Тестирование сервиса успешной инъекции сервиса.
  it('should inject car service', () => {
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  // Тестирование методов сервиса
  it(`should display car if isVisible===true`, () => {
    carService.showCar();
    fixture.detectChanges();
    const nativeElem = fixture.debugElement.nativeElement; // Получаем данные из шаблона.
    const text = nativeElem.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it(`should not display car if isVisible===false`, () => {
    carService.hideCar();
    fixture.detectChanges();
    const nativeElem = fixture.debugElement.nativeElement; // Получаем данные из шаблона.
    const text = nativeElem.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });

  // Тестирование асинхронного получения переменной из сервиса. Синхронно мы получаем undefined.
  it('should not get car name if not async',() => {
    spyOn(carService, 'getCarName')
      .and.returnValue(Observable.of('TestCar').delay(100));
    fixture.detectChanges();
    expect(component.carName).toBe(undefined);
  });

  it('should get car name not async', async(() => {
    spyOn(carService, 'getCarName')
      .and.returnValue(Observable.of('TestCar'));
    fixture.detectChanges();
    fixture.whenStable().then(() => expect(component.carName).toEqual('TestCar'));
  }));
});
