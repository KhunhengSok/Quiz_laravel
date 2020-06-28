<nav class="navbar navbar-expand-lg navbar-dark primary-color custom-navbar " >
    <div class="mr-4 ">
    </div>
    <a class="navbar-brand mr-auto text-white font-weight-bold text-lg-left custom-navbar-title" href="/">Quiz</a>

    <div class="ml-auto">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        {{-- <ul class="navbar-nav ml-auto ">
          <li class="nav-item active">
            <a class="nav-link" href="#">Login </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
         --}}
        {{-- @if (Route::has('login'))
           <div class="top-right links ">
               @auth
                   <a class="text-white nav-link" href="{{ url('/') }}">Home</a>
               @else
                   <a class="text-white nav-link" href="{{ route('login') }}">Login</a>

                   @if (Route::has('register'))
                       <a class="text-white" href="{{ route('register') }}">Register</a>
                   @endif
               @endauth
           </div>
       @endif   --}}
        <!-- Right Side Of Navbar -->
            <ul class=" ml-auto custom-navbar-item">
                {{-- <li class="nav-item custom-navbar custom-navbar-item"> --}}
                <li class="nav-item custom-navbar-item">
                    <a id='create_nav' class="nav-link text-white" href="/quiz/create"  aria-labelledby="navbarDropdown">Create Quiz</a>
                </li>

                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="nav-link text-white" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link  text-white" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li class="nav-item dropdown custom-navbar custom-navbar-item">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle text-lg-right text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right custom-navbar" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none; color:black">
                                @csrf

                            </form>
                        </div>
                    </li>
                @endguest

            </ul>
        </div>
    </div>
</nav>
